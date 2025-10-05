import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Fix for development CORS issues
  allowedDevOrigins: [
    'preview-chat-0552c9db-8e5a-4204-865b-240f2821e211.space.z.ai'
  ],
  // Proper configuration for standalone mode
  output: 'standalone',
  // Ensure proper App Router configuration
  serverExternalPackages: [],
};

export default nextConfig;
