/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['picsum.photos', 'lorempixel.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
