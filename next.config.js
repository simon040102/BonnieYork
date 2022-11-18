const nextConfig = {
  // experimental: {
  //   runtime: 'experimental-edge',
  //   appDir: true,
  // },
  
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = nextConfig

module.exports = {
  images: {
    unoptimized: true,
  },
};
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