/** @type {import('next').NextConfig} */
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nos.wjv-1.neo.id',
        port: '',
      },
    ],
    formats: ["image/avif", "image/webp",],
  },
  optimization: {
    mergeDuplicateChunks: true,
  },
};

module.exports = withPlugins([withSvgr, nextConfig]);
