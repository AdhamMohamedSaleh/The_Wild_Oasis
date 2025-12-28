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
  serverExternalPackages: ["@auth/core"],
  turbopack: {},
  // output: "export",
};

export default nextConfig;
