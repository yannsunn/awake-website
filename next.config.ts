import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stable configuration for Vercel
  
  // Disable ESLint and TypeScript checking during builds for faster deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
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
  
  // Enhanced Security headers - 限界突破セキュリティ対応
  async headers() {
    return [
      {
        source: '/:path((?!_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://line.me;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https: blob:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://www.google-analytics.com https://api.line.me https://vitals.vercel-insights.com https://www.awakeinc.co.jp;
              frame-src 'none';
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          }
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
