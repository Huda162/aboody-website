import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Temporary measure
  },
  images: {
    domains: ['aboody.ps'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
