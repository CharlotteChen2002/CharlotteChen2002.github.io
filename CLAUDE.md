# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Charlotte Chen's personal academic website, built on the [Academic Pages](https://academicpages.github.io/) Jekyll template (forked from Minimal Mistakes). It is deployed via GitHub Pages at `https://charlottechen2002.github.io`.

## Local Development

**Prerequisites (macOS):**

```bash
brew install ruby node
gem install bundler
bundle install
```

**Serve locally (live-reload):**

```bash
bundle exec jekyll serve -l -H localhost
```

Site runs at `http://localhost:4000`. Changes to `_config.yml` require a server restart; all other file changes rebuild automatically.

**Using Docker instead:**

```bash
chmod -R 777 .
docker compose up
```

## Site Architecture

Content is organized into Jekyll collections. Each collection maps to a directory of Markdown files with YAML front matter:

| Directory | URL path | Purpose |
| --- | --- | --- |
| `_pages/` | various | Static pages (About, CV, Coursework, etc.) |
| `_portfolio/` | `/portfolio/` | Research & project entries |
| `_teaching/` | `/teaching/` | TA/mentorship positions |
| `_publications/` | `/publications/` | Academic papers |
| `_talks/` | `/talks/` | Presentations |
| `_posts/` | `/year/title/` | Blog posts |
| `_elen6350/` | custom | ELEN 6350 course materials (tutorials, tracker) |

**Key config files:**
- `_config.yml` — site-wide settings: author info, URL, plugins, collection definitions, layout defaults
- `_data/navigation.yml` — controls which links appear in the top nav bar and their order
- `_data/cv.json` — structured CV data used by the JSON-generated CV page

**Layouts and includes** live in `_layouts/` and `_includes/`. The sidebar author profile is in `_includes/author-profile.html`.

**Styles** are in `_sass/` (SCSS), compiled to `assets/css/`.

## Adding Content

- **New portfolio project:** create `_portfolio/portfolio-project-N.md` with front matter (`title`, `excerpt`, `header.teaser`, `collection: portfolio`)
- **New teaching entry:** create `_teaching/YYYY-semester-role-N.md`
- **New nav link:** add an entry under `main:` in `_data/navigation.yml`
- **CV file:** replace `files/CharlotteChenCV.pdf`; the CV link in nav points directly to this file

## Markdown Generator

`markdown_generator/` contains Jupyter notebooks that convert TSV spreadsheets into properly formatted Markdown files for publications and talks.

## Deployment

Pushing to `master` triggers GitHub Pages to build and deploy automatically. The `_site/` directory is the build output — do not edit it directly.
