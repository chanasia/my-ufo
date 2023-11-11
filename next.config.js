require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOSTNAME: process.env.HOSTNAME,
  },
}

module.exports = nextConfig
