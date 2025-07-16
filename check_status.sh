#!/bin/bash

echo "=== Git Status ==="
git status

echo -e "\n=== Recent Commits ==="
git log --oneline -5

echo -e "\n=== Check if local is up to date with remote ==="
git status -sb

echo -e "\n=== Check remote URL ==="
git remote -v