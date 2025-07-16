#!/bin/bash
cd /mnt/c/Users/march/my-website
git add -A
git commit -F commit_message.txt
git push origin main
rm commit_message.txt