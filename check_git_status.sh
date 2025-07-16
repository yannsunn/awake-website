#!/bin/bash
cd /mnt/c/Users/march/my-website
echo "=== Git Status ==="
git status
echo ""
echo "=== Last 5 Commits ==="
git log --oneline -5
echo ""
echo "=== Checking commit_message.txt ==="
if [ -f commit_message.txt ]; then
    echo "commit_message.txt exists"
else
    echo "commit_message.txt does not exist"
fi