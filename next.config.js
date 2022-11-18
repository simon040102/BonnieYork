/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   runtime: 'experimental-edge',
  //   appDir: true,
  // },
  images: {
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  },
  reactStrictMode: true,
  swcMinify: true,
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
});
