module.exports = {

  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "https://riyajutensilsshop.onrender.com/api/auth/:path*",
      },
    ];
  },
};