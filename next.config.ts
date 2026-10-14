import type { NextConfig } from "next";

// Static export: `npm run build` writes the finished site to the `out` folder,
// which can be uploaded to any static host (Netlify, Cloudflare Pages, and so on).
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
