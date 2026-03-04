import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LiftUpFounderUi",
  assetPrefix: "/LiftUpFounderUi/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
