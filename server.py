"""Minimal static file server for ai-builders.space deployment. Reads PORT from env."""
import os
import http.server
import socketserver

PORT = int(os.getenv("PORT", "8000"))
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
