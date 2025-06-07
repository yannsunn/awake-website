import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stable configuration for Vercel
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.mercdn.net',
        pathname: '/item/detail/orig/photos/**',
      },
    ],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  
  // Bundle analyzer (development only)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      if (process.env.NODE_ENV === 'development') {
        config.module.rules.push({
          test: /\.(js|jsx|ts|tsx)$/,
          use: {
            loader: 'webpack-bundle-analyzer/lib/BundleAnalyzerPlugin',
            options: {
              analyzerMode: 'server',
              openAnalyzer: false,
            },
          },
        });
      }
      return config;
    },
  }),
};

export default nextConfig;
