#!/usr/bin/env bash
# Publish this site to GitHub as a PRIVATE repo and turn on GitHub Pages.
# Requires the GitHub CLI: https://cli.github.com  (brew install gh, then: gh auth login)
set -euo pipefail
REPO="${1:-chapin-salesforce-journey}"
cd "$(dirname "$0")"
command -v gh >/dev/null || { echo "Install the GitHub CLI first: brew install gh && gh auth login"; exit 1; }
gh repo create "$REPO" --private --source=. --remote=origin --push
OWNER="$(gh api user -q .login)"
gh api -X POST "repos/$OWNER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null \
  && echo "Pages enabled." \
  || echo "Pages not enabled automatically (private-repo Pages needs GitHub Pro/Team/Enterprise). Enable it under Settings > Pages."
echo "Repo:  https://github.com/$OWNER/$REPO"
echo "Site:  https://$OWNER.github.io/$REPO/  (live in 1-2 minutes once Pages is on)"
