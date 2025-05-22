import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",

  reactStrictMode: true,
  images: {
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        port: "",
        pathname: "/plus-assets/**",
        search: "",
      },
    ],
    domains: [
      "media.graphassets.com", // For Hygraph (formerly GraphCMS)
      "media.graphcms.com",
    ],
  },
  env: {
    NEXT_PUBLIC_GRAPHCMS_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
    GRAPHCMS_TOKEN: process.env.GRAPHCMS_TOKEN,
  },
};

export default nextConfig;
