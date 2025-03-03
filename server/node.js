const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

// Your existing Express setup...

// SSL options
const options = {
  key: fs.readFileSync('C:/Users/wette/letsencrypt/live/dnncmasterclass.com/privkey.pem'),
  cert: fs.readFileSync('C:/Users/wette/letsencrypt/live/dnncmasterclass.com/fullchain.pem')
};

// Create HTTPS server
https.createServer(options, app).listen(443, () => {
  console.log('HTTPS server running on port 443');
});

// Redirect HTTP to HTTPS
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
}).listen(80);
