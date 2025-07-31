#!/bin/bash

SIMULATOR=$(xcrun simctl list devices available | \
  grep -E '^\s+iPhone' | \
  sed -E 's/^\s+([^(]+).*/\1/' | \
  head -n 1)

if [ -z "$SIMULATOR" ]; then
  echo "No iOS simulators found. Consider running npx react-native run-ios in your terminal"
  exit 1
fi

npx react-native run-ios --simulator="$SIMULATOR"