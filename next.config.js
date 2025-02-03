/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static export during 'npm run build'
  images: {
    unoptimized: true,  // Prevents issues with Next.js image optimization
  },
  basePath: '/portfolio', // Required if deploying under a subpath
  assetPrefix: '/portfolio/', // Ensures assets load correctly
};

module.exports = nextConfig;
