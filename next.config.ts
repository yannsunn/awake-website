import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stable configuration for Vercel
  
  // Enhanced type safety - enable proper TypeScript checking during builds
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ビルドタイムアウトを延長（画像最適化対応）
  staticPageGenerationTimeout: 180, // 3分

  // Core Web Vitals 最適化 - 限界突破パフォーマンス
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    // API制限対応: 最大サイズを8000ピクセル以下に制限
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.mercdn.net',
        pathname: '/item/detail/orig/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Core Web Vitals 最適化 - コンパイラ最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
  // Core Web Vitals 限界突破最適化
  poweredByHeader: false,
  compress: true,
  
  // バンドルサイズ最適化
  webpack: (config: any, { dev, isServer }: any) => {
    // プロダクションビルドの最適化
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // フレームワークチャンク
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // ライブラリチャンク
            lib: {
              test(module: any) {
                return (
                  module.size() > 160000 &&
                  /node_modules[\\/]/.test(module.identifier())
                )
              },
              name(module: any) {
                const hash = require('crypto')
                  .createHash('sha1')
                  .update(module.identifier())
                  .digest('hex')
                  .substring(0, 8)
                return `lib-${hash}`
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
              chunks: 'all',
            },
            // 共通チャンク
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
              chunks: 'all',
              reuseExistingChunk: true,
            },
          },
        },
      }
    }
    
    return config
  },
  
  // パフォーマンスメトリクス設定
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  
  // Turbopack設定（Turbopackが安定版になったため移動）
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Enhanced Security headers - 限界突破セキュリティ対応
  async headers() {
    return [
      {
        source: '/:path((?!_next/static|_next/image|favicon.ico|.*\.js|.*\.css).*)',
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
              base-uri 'self' https://awakeinc.co.jp https://www.awakeinc.co.jp;
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
  
  // Bundle analyzer (開発時のみ)
  ...(process.env.ANALYZE === 'true' && {
    bundleAnalyzer: {
      enabled: true,
      analyzerMode: 'server',
      analyzerPort: 8888,
      openAnalyzer: false,
    },
  }),
};

export default nextConfig;
