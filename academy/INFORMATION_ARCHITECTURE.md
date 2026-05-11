# Information Architecture

This site is a research dashboard built from source Markdown records. The homepage should help readers decide what to read next, not expose every generated record as a flat stream.

## Layers

1. **Information Intake**
   - Primary user need: understand recent research news and keep awareness of the field.
   - The homepage links to the full paper feed and highlights the recent collection rhythm.

2. **Gojo Ranking**
   - Primary homepage decision unit.
   - Uses recent paper packages from the last 3 days.
   - Gojo's rating decides ranking order when available; unrated papers remain visible after rated papers.
   - Each card shows a reason and next action so the homepage supports inspiration, not just browsing.

3. **Research Radar**
   - Merges topic distribution and topic navigation into one section.
   - Problem lenses support exploratory intent: Agent, UX / HCI, Evaluation, Fairness, Multimodal.
   - Topic tracks support accumulated browsing: AI, NLP, CV, ML, UX / HCI.
   - Hot trend filters are generated from the latest 14-day paper window and deduped by label.

4. **Reading Workspace**
   - Detail pages support focused reading rather than repeating source metadata.
   - The article body starts with the substantive summary sections after metadata cleanup.
   - A right-side section navigator follows scrolling on desktop and highlights the active section.
   - Paper detail pages expose the original arXiv/DOI/URL when available.
   - The Obsidian action copies a structured Markdown note and opens Obsidian via URI.

5. **Members**
   - Role pages stay secondary.
   - Member pages update only when role-note files exist.

6. **Archive**
   - Complete chronological and searchable record layer.
   - Keeps old records discoverable without making the homepage repetitive.

## Homepage Contract

- Lead with information intake and the Gojo 3-day ranking.
- Keep role notes attached to their paper package instead of rendering them as independent homepage cards.
- Merge research topic distribution and topic navigation into Research Radar.
- Keep detail pages clean: no repeated title/source metadata blocks above the article body.
- Prefer lightweight side navigation over heavy cards for long article sections.
- Keep search broad enough to find role notes and legacy records.

## Hermes Fit

Hermes should write one paper package at a time:

```text
records/YYYY/MM/DD/HH/<paper-key>/论文总结.md
records/YYYY/MM/DD/HH/<paper-key>/<member>-能力进化.md
```

This layout gives the generator a stable grouping key and avoids duplicate homepage summaries.
