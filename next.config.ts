import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/hacks25",
  reactStrictMode: true,
};

module.exports = nextConfig;

