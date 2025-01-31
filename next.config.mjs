const isProd = process.env.NODE_ENV === 'production';
console.log(isProd);
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/himanshubohra/' : '',
  basePath: isProd ? '/himanshubohra' : '',
  output: 'standalone'
};

export default nextConfig;