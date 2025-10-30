const fs = require('fs');

const pages = [
  { name: 'home', url: 'http://localhost:3004/' },
  { name: 'about', url: 'http://localhost:3004/about' },
  { name: 'faq', url: 'http://localhost:3004/faq' },
  { name: 'partners', url: 'http://localhost:3004/partners' },
  { name: 'services-web', url: 'http://localhost:3004/services/web' },
  { name: 'services-ai', url: 'http://localhost:3004/services/ai' },
  { name: 'services-ec', url: 'http://localhost:3004/services/ec' }
];

const https = require('https');
const http = require('http');

pages.forEach((page, i) => {
  const delay = i * 1000;
  setTimeout(() => {
    const url = new URL(page.url);
    const client = url.protocol === 'https:' ? https : http;
    
    const req = client.get(page.url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`✓ ${page.name}: Status ${res.statusCode}`);
      });
    });
    
    req.on('error', (err) => {
      console.error(`✗ ${page.name}: ${err.message}`);
    });
    
    req.setTimeout(5000, () => {
      req.abort();
      console.error(`✗ ${page.name}: Timeout`);
    });
  }, delay);
});

setTimeout(() => {
  console.log('\nVisual check complete. All pages should be accessible.');
  process.exit(0);
}, 10000);
