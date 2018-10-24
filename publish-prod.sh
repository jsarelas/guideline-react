#!/usr/bin/env sh
echo "...script start..."

# abort on errors
set -e

# build
echo "...npm run build..."
npm run build

# navigate into the build output directory
echo "...change directory to /build..."
cd build

echo "...git commit deploy..."
git init
git remote add origin "https://github.com/jsarelas/guideline-react/"
git add -A
git commit -m "publish files"

echo "...git push to build branch..."

git checkout -b publish
git push -u origin publish --force

echo "...build branch has been updated..."
echo "...script end..."
cd -