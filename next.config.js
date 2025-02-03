/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static export
  images: {
    unoptimized: true, // Avoids errors related to image optimization
  },
  basePath: '/portfolio', // Optional: if deploying to a subfolder
};

module.exports = nextConfig;
