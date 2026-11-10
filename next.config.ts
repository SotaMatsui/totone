import type { NextConfig } from "next";

// GitHub Pages (https://sotamatsui.github.io/totone/) 向けの静的エクスポート設定
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/totone",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
