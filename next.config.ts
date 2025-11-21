import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  // Uncomment and set this if deploying to a subdirectory (e.g., /dryfish)
  basePath: "/dryfish_ecom",
  // Recommended for static exports
  trailingSlash: true,
};

export default nextConfig;
