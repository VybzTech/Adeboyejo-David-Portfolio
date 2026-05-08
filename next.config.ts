import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  transpilePackages: ["@phosphor-icons/react", "@react-three/drei", "framer-motion"],
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "framer-motion"],
  },
};


export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
