"""Tests for verify_citations.py"""
from __future__ import annotations

import json
import os
import re
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch, MagicMock

SCRIPT_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(SCRIPT_DIR))
import verify_citations as vc


class TestExtractArxivIds(unittest.TestCase):
    def test_standard_format(self):
        ids = vc.extract_arxiv_ids('arXiv:2301.12345 some text')
        self.assertEqual(ids, ['2301.12345'])

    def test_url_format(self):
        ids = vc.extract_arxiv_ids('https://arxiv.org/abs/2301.12345')
        self.assertEqual(ids, ['2301.12345'])

    def test_bare_id(self):
        ids = vc.extract_arxiv_ids('2301.12345 is the paper')
        self.assertEqual(ids, ['2301.12345'])

    def test_multiple_ids(self):
        content = 'arXiv:2301.12345 and arXiv:2302.67890'
        ids = vc.extract_arxiv_ids(content)
        self.assertEqual(sorted(ids), sorted(['2301.12345', '2302.67890']))

    def test_with_version_suffix(self):
        ids = vc.extract_arxiv_ids('arXiv:2301.12345v2')
        self.assertEqual(ids, ['2301.12345'])

    def test_deduplicate(self):
        content = 'arXiv:2301.12345 also 2301.12345'
        ids = vc.extract_arxiv_ids(content)
        self.assertEqual(ids, ['2301.12345'])

    def test_no_ids(self):
        ids = vc.extract_arxiv_ids('No arXiv IDs here')
        self.assertEqual(ids, [])

    def test_five_digit_suffix(self):
        ids = vc.extract_arxiv_ids('arXiv:2301.12345')
        self.assertEqual(ids, ['2301.12345'])

    def test_chinese_colon(self):
        ids = vc.extract_arxiv_ids('arXiv：2301.12345')
        self.assertEqual(ids, ['2301.12345'])


class TestExtractDois(unittest.TestCase):
    def test_standard_doi(self):
        dois = vc.extract_dois('DOI: 10.1234/abcd.5678')
        self.assertEqual(dois, ['10.1234/abcd.5678'])

    def test_url_doi(self):
        dois = vc.extract_dois('https://doi.org/10.1234/abcd.5678')
        self.assertEqual(dois, ['10.1234/abcd.5678'])

    def test_multiple_dois(self):
        content = '10.1234/abcd.5678 and 10.5678/efgh.9012'
        dois = vc.extract_dois(content)
        self.assertEqual(sorted(dois), sorted(['10.1234/abcd.5678', '10.5678/efgh.9012']))

    def test_no_doi(self):
        dois = vc.extract_dois('No DOI here')
        self.assertEqual(dois, [])

    def test_trailing_punctuation_stripped(self):
        dois = vc.extract_dois('doi: 10.1234/abcd.5678.')
        self.assertEqual(dois, ['10.1234/abcd.5678'])

    def test_deduplicate(self):
        content = '10.1234/abcd.5678 also 10.1234/abcd.5678'
        dois = vc.extract_dois(content)
        self.assertEqual(dois, ['10.1234/abcd.5678'])


class TestVerifyArxivIds(unittest.TestCase):
    def test_parse_response(self):
        """Test parsing a real arXiv API XML response."""
        xml_response = '''<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <entry>
    <id>http://arxiv.org/abs/2301.12345v1</id>
    <title>Test Paper Title</title>
    <summary>Abstract here</summary>
  </entry>
</feed>'''
        mock_resp = MagicMock()
        mock_resp.read.return_value = xml_response.encode('utf-8')
        with patch('urllib.request.urlopen') as mock_urlopen:
            mock_urlopen.return_value.__enter__.return_value = mock_resp
            results = vc.verify_arxiv_ids(['2301.12345'])
        self.assertEqual(len(results), 1)
        self.assertEqual(results[0]['status'], 'verified')
        self.assertEqual(results[0]['title'], 'Test Paper Title')

    def test_not_found(self):
        """Test when arXiv ID not in response."""
        xml_response = '''<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
</feed>'''
        mock_resp = MagicMock()
        mock_resp.read.return_value = xml_response.encode('utf-8')
        with patch('urllib.request.urlopen') as mock_urlopen:
            mock_urlopen.return_value.__enter__.return_value = mock_resp
            results = vc.verify_arxiv_ids(['2301.99999'])
        self.assertEqual(results[0]['status'], 'not_found')

    def test_api_error(self):
        with patch('urllib.request.urlopen') as mock_urlopen:
            mock_urlopen.side_effect = OSError('Connection refused')
            results = vc.verify_arxiv_ids(['2301.12345'])
        self.assertEqual(results[0]['status'], 'error')


class TestVerifyDois(unittest.TestCase):
    def test_parse_response(self):
        json_response = json.dumps({
            'message': {
                'title': ['A Verified Paper'],
                'DOI': '10.1234/abcd.5678',
            }
        }).encode('utf-8')
        mock_resp = MagicMock()
        mock_resp.read.return_value = json_response
        with patch('urllib.request.urlopen') as mock_urlopen:
            mock_urlopen.return_value.__enter__.return_value = mock_resp
            results = vc.verify_dois(['10.1234/abcd.5678'])
            self.assertEqual(results[0]['status'], 'verified')
            self.assertIn('Verified Paper', results[0]['title'])

    def test_not_found(self):
        import urllib.error
        with patch('urllib.request.urlopen') as mock_urlopen:
            mock_urlopen.side_effect = urllib.error.HTTPError(
                'http://test', 404, 'Not Found', {}, None
            )
            results = vc.verify_dois(['10.9999/notfound'])
            self.assertEqual(results[0]['status'], 'not_found')


class TestFindPaperFiles(unittest.TestCase):
    def test_find_papers(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / 'records' / '2026' / '05' / '15' / '10' / '2301.12345').mkdir(parents=True)
            paper = root / 'records' / '2026' / '05' / '15' / '10' / '2301.12345' / '论文总结.md'
            paper.write_text('arXiv:2301.12345\n## 研究什么\n', encoding='utf-8')
            files = vc.find_paper_files(root)
            self.assertEqual(len(files), 1)

    def test_no_papers(self):
        with tempfile.TemporaryDirectory() as td:
            files = vc.find_paper_files(Path(td))
            self.assertEqual(files, [])


class TestFormatReport(unittest.TestCase):
    def test_report_format(self):
        scan = [{'file': '/tmp/test/论文总结.md', 'relative': 'test/论文总结.md', 'arxiv_ids': ['2301.12345'], 'dois': []}]
        arxiv_r = {'2301.12345': {'id': '2301.12345', 'status': 'verified', 'title': 'Test Paper', 'error_msg': ''}}
        doi_r = {}
        report = vc.format_report(scan, arxiv_r, doi_r)
        self.assertIn('📄', report)
        self.assertIn('✅', report)
        self.assertIn('2301.12345', report)
        self.assertIn('Test Paper', report)


class TestVerifyCitationsIntegration(unittest.TestCase):
    def test_dry_run(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            (root / 'records' / '2026' / '05' / '15' / '10' / '2301.12345').mkdir(parents=True)
            paper = root / 'records' / '2026' / '05' / '15' / '10' / '2301.12345' / '论文总结.md'
            paper.write_text(
                '# Test Paper\n**论文标题：** Test\n**作者：** Author\n'
                '**来源：** arXiv:2301.12345\n**日期：** 2026-05\n'
                '**领域标签：** AI\n**综合评分：** 8.5/10\n\n'
                '## 研究什么？\nContent\n',
                encoding='utf-8',
            )
            config = root / 'config.json'
            config.write_text(json.dumps({'source_root': str(root), 'project_root': str(root)}), encoding='utf-8')
            result = subprocess.run(
                [sys.executable, str(SCRIPT_DIR / 'verify_citations.py'), '--source', str(root), '--dry-run'],
                capture_output=True, text=True, timeout=60,
                cwd=str(root),
            )
            self.assertIn('扫描源目录', result.stdout)


if __name__ == '__main__':
    unittest.main()
