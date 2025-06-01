import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
       domains:["C:\Users\shukl\Desktop\portfoilio\portfolio-app\public\self.jpg","i.ibb.co"]
  }
};

export default nextConfig;
