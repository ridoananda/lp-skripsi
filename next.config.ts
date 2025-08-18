import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize JavaScript transpilation for modern browsers
  experimental: {
    // Optimize server components
    serverComponentsExternalPackages: [],
  },
  
  // Configure compiler options to reduce legacy JavaScript
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    // Enable image optimization
    formats: ['image/webp', 'image/avif'],
    // Minimize image quality for faster loading
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enable compression
  compress: true,
  
  // Optimize CSS
  optimizeFonts: true,
  
  // Configure webpack for better performance
  webpack: (config, { dev }) => {
    // Optimize for production
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        // Split chunks more efficiently
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };
    }
    
    return config;
  },
  
  // Enable static optimization
  output: 'standalone',
};

export default nextConfig;
