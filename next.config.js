require("dotenv").config();
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOSTNAME: process.env.HOSTNAME,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
