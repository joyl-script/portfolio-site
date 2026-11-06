import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["work-1-bpazlybgtucwoltz.prod-runtime.all-hands.dev"],
  output: "export",
  basePath: "/portfolio-site",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
