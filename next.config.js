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
/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ['bonnieyork.rocket-coding.com'],
  },
  withTM,
});
module.exports = nextConfig;
