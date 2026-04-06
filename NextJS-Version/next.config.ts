import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  } as any,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "image-cdn.ubuy.com",
      },
      {
        protocol: "https",
        hostname: "saralhome.com",
      },
      {
        protocol: "https",
        hostname: "www.pradhanembroiderystores.com",
      },
      {
        protocol: "https",
        hostname: "www.sanathan.com",
      },
      {
        protocol: "https",
        hostname: "www.ganeshthread.com",
      },
      {
        protocol: "https",
        hostname: "5.imimg.com",
      }
    ],
  },
};

export default nextConfig;
