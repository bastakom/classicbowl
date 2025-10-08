/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/((?!_next/static|_next/image|favicon.ico).*)', // Don't apply to static assets
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
