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
git add -A
git commit -m "publish"

echo "...git push to build branch..."

#git checkout -b "build"
git push origin "build" --force

echo "...build branch has been updated..."
echo "...script end..."
cd -