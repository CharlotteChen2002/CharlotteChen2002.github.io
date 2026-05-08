# Security Policy

## Supported Versions

This is a static personal academic website. There are no versioned releases — the current `master` branch is the only active deployment.

## Reporting a Vulnerability

If you discover a security vulnerability in this repository (e.g. exposed credentials, a dependency with a known CVE, or a misconfiguration), please report it responsibly:

1. **Do not open a public issue.** This avoids disclosing the vulnerability before it is addressed.
2. **Use GitHub's private vulnerability reporting.** Go to the [Security Advisories](../../security/advisories/new) tab and submit a private report. This feature is enabled for this repository.
3. Include as much detail as possible: what you found, where it is, and steps to reproduce if applicable.

I will acknowledge the report within a few days and work to resolve confirmed issues promptly.

## Scope

Because this is a static site with no user accounts, authentication, or backend, the most relevant concerns are:

- Exposed secrets or API keys committed to the repository
- Malicious dependencies introduced via `Gemfile` or `package.json`
- Content injection via third-party scripts or embeds

Reports outside this scope (e.g. general Jekyll or GitHub Pages platform issues) should be directed to the respective upstream projects.
