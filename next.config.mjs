const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/himanshubohra.github.io/' : '',
  basePath: isProd ? '/himanshubohra.github.io' : '',
  output: 'export'
};

export default nextConfig;