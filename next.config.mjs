/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Rewrite para subdomínio CRM
      {
        source: '/:path*',
        destination: '/crm/:path*',
        has: [
          {
            type: 'host',
            value: 'crm.lemaisolucoes.com.br',
          },
        ],
      },
      // Rewrite para subdomínio Agenda
      {
        source: '/:path*',
        destination: '/agenda/:path*',
        has: [
          {
            type: 'host',
            value: 'agenda.lemaisolucoes.com.br',
          },
        ],
      },
    ]
  },
}

export default nextConfig
