import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ['react-native', 'react-native-svg'],
  
  // We use 'as any' here to stop the red underline 
  // while ensuring Turbopack gets the alias it needs.
  experimental: {
    turbo: {
      resolveAlias: {
        'react-native': 'react-native-web',
      },
    },
  } as any,

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    return config;
  },
};

export default nextConfig;