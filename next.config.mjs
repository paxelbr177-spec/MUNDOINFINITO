/**
 * Auto-detecta basePath cuando corre en GitHub Actions.
 * Si el repo se llama "mundo-infinito", el sitio queda en:
 *   https://USUARIO.github.io/mundo-infinito/
 * y los assets se sirven con prefijo /mundo-infinito/.
 *
 * Si el repo es <usuario>.github.io (sitio raíz), basePath queda vacío.
 */
const isCI = !!process.env.GITHUB_ACTIONS;
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repo.endsWith('.github.io');
const basePath = isCI && repo && !isUserSite ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
