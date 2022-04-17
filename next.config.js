/** @type {import('next').NextConfig} */
require("dotenv").config({ path: "/.env.local" });
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.iconscout.com",
      "pngimg.com",
      "cdn.shopify.com",
      "oldschool.runescape.wiki",
      "www.material-change.com",
      "creazilla-store.fra1.digitaloceanspaces.com",
      "www.seekpng.com",
    ],
  },
};
