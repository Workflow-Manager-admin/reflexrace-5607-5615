#!/bin/bash
cd /home/kavia/workspace/code-generation/reflexrace-5607-5615/reflex_race
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

