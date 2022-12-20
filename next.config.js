/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bonnieyork.rocket-coding.com'],
  },
};
module.exports = nextConfig;

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/list',
]);

// module.exports = withTM({
//   // your custom config goes here
//   transpileModules: ['react-bulma-components'],
//   sassLoaderOptions: {
//     includePaths: ['./components'],
//   },
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       '/': { page: '/' },
//       '/login': { page: '/login' },
//       '/favorite': { page: '/favorite' },
//       '/profile': { page: '/profile' },
//       '/reserve': { page: '/reserve' },
//       '/search': { page: '/search' },
//       '/signup': { page: '/signup' },
//       '/staff': { page: '/staff' },
//       '/store': { page: '/store' },
//     };
//   },
// });
