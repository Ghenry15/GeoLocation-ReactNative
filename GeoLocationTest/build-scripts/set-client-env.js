#!/usr/bin/env node

const setClientEnv = () => {
  const fs = require('fs');
  const { dirname } = require('path');
  const rootAppDir = dirname(require.main.filename) + "/../";
  fs.copyFile(rootAppDir + '.env.client', rootAppDir + '.env', (err) => {
    if (err) throw err;
    console.log('.env.client was copied to .env');
  });
}

setClientEnv();