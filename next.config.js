const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
    appDir: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = nextConfig


/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
  "@fullcalendar/list"
]);

module.exports = withTM({
  // your custom config goes here
});