/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ['en', 'ar'],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: 'en',
  // }
}

module.exports = nextConfig
