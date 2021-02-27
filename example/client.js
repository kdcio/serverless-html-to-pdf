const fs = require('fs');
const fetch = require('node-fetch');
const input = require('../tests/fixtures/input.json');

const OUTPUT_FILE = './base64.pdf';

const run = async () => {
  const res = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  const json = await res.json();
  try {
    // delete existing file
    fs.unlinkSync(OUTPUT_FILE);
  } catch (error) {}

  // create PDF file
  fs.writeFileSync(OUTPUT_FILE, json.data, 'base64');
};

run();
