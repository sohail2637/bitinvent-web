/** @type {import('next').NextConfig} */
const nextConfig = {
   eslint: {

    ignoreDuringBuilds: true,
  },  
  images: {
        domains: ['via.placeholder.com' , 'teo.dk'], // Add more domains as needed
      },
};

export default nextConfig;
