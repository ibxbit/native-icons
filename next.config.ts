import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ['react-native', 'react-native-web', 'react-native-svg'],
  
  // In Next.js 16+, 'experimental.turbo' moved to a top-level 'turbopack' key
  turbopack: {
    resolveAlias: {
      'react-native': 'react-native-web',
    },
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    return config;
  },
};

export default nextConfig;