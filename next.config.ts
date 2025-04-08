/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Esto desactiva la verificación de ESLint durante las builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['openweathermap.org'], // Agrega aquí el dominio de tus imágenes
    // También puedes usar remotePatterns para más control
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        pathname: '/img/wn/**',
      },
    ],
  },
}

module.exports = nextConfig