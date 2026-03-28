/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const [repoOwner = '', repositoryName = ''] = (process.env.GITHUB_REPOSITORY || '/').split('/')
const isUserSiteRepository = repositoryName === `${repoOwner}.github.io`
const basePath =
  isGithubActions && repositoryName && !isUserSiteRepository ? `/${repositoryName}` : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig


