/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://127.0.0.1:8000",
          },
        ],
      },
    ];
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'avatar.vercel.sh']
  }
};


module.exports = nextConfig;
