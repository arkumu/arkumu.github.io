#!/usr/bin/env bash
set -e

# Clean shutdown on Ctrl+C
trap 'kill $(jobs -p) 2>/dev/null; exit' INT TERM

# Building Pagefind index once
npx pagefind --site _site
# Starting Jekyll with live reload
bundle exec jekyll serve --host 0.0.0.0  --force-polling --livereload
