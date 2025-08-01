/**
 * Script to manually trigger server sitemap regeneration
 * 
 * Usage: node scripts/generate-server-sitemap.mjs
 */

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Environment variables - change as needed
const IS_DEV = process.env.NODE_ENV === 'development';
const DOMAIN = IS_DEV ? 'localhost:3000' : 'thucphambonehanh.com';
const PROTOCOL = IS_DEV ? 'http' : 'https';
const SITEMAP_PATH = '/api/server-sitemap';
const OUTPUT_DIR = path.join(__dirname, '../public');

console.log(`Regenerating server sitemap in ${IS_DEV ? 'development' : 'production'} mode...`);

// Choose the right protocol library
const client = PROTOCOL === 'https' ? https : http;

// Request the server-sitemap from the API route
client.get(`${PROTOCOL}://${DOMAIN}${SITEMAP_PATH}`, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to fetch sitemap: Status Code ${res.statusCode}`);
    res.resume();
    return;
  }

  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      // Save the sitemap to a local file
      const outputPath = path.join(OUTPUT_DIR, 'server-sitemap.xml');
      fs.writeFileSync(outputPath, data);
      
      console.log(`Server sitemap saved to ${outputPath}`);
      console.log('Done!');
    } catch (err) {
      console.error('Error saving sitemap:', err);
    }
  });
}).on('error', (err) => {
  console.error('Error fetching server sitemap:', err.message);
}); 