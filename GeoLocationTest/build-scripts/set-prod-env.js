#!/usr/bin/env node

const setClientEnv = () => {
  const fs = require('fs');
  const { dirname } = require('path');
  const rootAppDir = dirname(require.main.filename) + "/../";
  fs.copyFile(rootAppDir + '.env.prod', rootAppDir + '.env', (err) => {
    if (err) throw err;
    console.log('.env.prod was copied to .env');
  });
}

setClientEnv();