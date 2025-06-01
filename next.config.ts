import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Needed for static export (next export)
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for next export
    domains: ["i.ibb.co","C:\Users\shukl\Desktop\portfoilio\portfolio-app\public\self.jpg"], // Only external URLs work with next/image + export
  },
 // basePath: "/portfolio", // Replace with your GitHub repo name
 // assetPrefix: "/portfolio", // Important for correct path resolution
  trailingSlash: true, 
};

export default nextConfig;
