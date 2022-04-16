/** @type {import('next').NextConfig} */
require("dotenv").config({ path: "/.env.local" });
const nextConfig = {
  reactStrictMode: true,
};

module.exports = { nextConfig };
