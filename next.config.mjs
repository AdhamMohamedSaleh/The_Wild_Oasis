/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vcutvqssdxgyyykslamm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@auth/core"],
  },
  // output: "export",
};

export default nextConfig;
