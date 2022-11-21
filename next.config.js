/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   runtime: 'experimental-edge',
  //   appDir: true,
  // },
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images.unsplash.con']
  }
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

module.exports = withTM({
  // your custom config goes here
  transpileModules: ['react-bulma-components'],
  sassLoaderOptions: {
    includePaths: ['./components'],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/favorite': { page: '/favorite' },
      '/profile': { page: '/profile' },
      '/reserve': { page: '/reserve' },
      '/search': { page: '/search' },
      '/signup': { page: '/signup' },
      '/staff': { page: '/staff' },
      '/store': { page: '/store' },
    };
  },
});
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       /* config for next-optimized-images */
//     },
//   ],

//   // your other plugins here
// ]);
// // next.config.js
// const withOptimizedImages = require('next-optimized-images');

// module.exports = withOptimizedImages({
//   /* config for next-optimized-images */

//   // your config for other plugins or the general next.js here...
// });
