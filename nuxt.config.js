export default {
  head: {
    titleTemplate: '%s | Taskify Works',
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Bad+Script|Handlee|Roboto:100,300,400,500,700"
      },
      {rel: "icon", sizes: "16x16", href: "/icons/favicon-16x16.png"},
      {rel: "icon", sizes: "32x32", href: "/icons/favicon-32x32.png"},
      {rel: "icon", sizes: "96x96", href: "/icons/favicon-96x96.png"},
      {rel: "icon", sizes: "152x152", href: "/icons/favicon-152x152.png"},
      {rel: "icon", sizes: "160x160", href: "/icons/favicon-160x160.png"},
      {rel: "icon", sizes: "192x192", href: "/icons/favicon-192x192.png"},
      {rel: "icon", sizes: "196x196", href: "/icons/favicon-196x196.png"},
      {rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon-180x180.png"},
      {rel: "apple-touch-icon", sizes: "120x120", href: "/icons/apple-touch-icon-120x120.png"},
      {rel: "apple-touch-icon", sizes: "167x167", href: "/icons/apple-touch-icon-167x167.png"},
      {rel: "apple-touch-icon", sizes: "152x152", href: "/icons/apple-touch-icon-152x152.png"},
      {rel: "apple-touch-icon", sizes: "114x114", href: "/icons/apple-touch-icon-114x114.png"},
      {rel: "apple-touch-icon", sizes: "144x144", href: "/icons/apple-touch-icon-144x144.png"},
      {rel: "apple-touch-icon", sizes: "72x72", href: "/icons/apple-touch-icon-72x72.png"},
      {rel: "apple-touch-icon", sizes: "57x57", href: "/icons/apple-touch-icon-57x57.png"},
      {rel: "apple-touch-icon", sizes: "80x80", href: "/icons/apple-touch-icon-80x80.png"},
      {rel: "apple-touch-icon", sizes: "87x87", href: "/icons/apple-touch-icon-87x87.png"},
      {rel: "apple-touch-icon", sizes: "58x58", href: "/icons/apple-touch-icon-58x58.png"},
      {rel: "apple-touch-icon", sizes: "60x60", href: "/icons/apple-touch-icon-60x60.png"},
      {rel: "apple-touch-icon", sizes: "64x64", href: "/icons/apple-touch-icon-64x64.png"},
      {rel: "apple-touch-icon", sizes: "40x40", href: "/icons/apple-touch-icon-40x40.png"},
      {rel: "icon", sizes: "48x48", href: "/icons/windows-device-48x48.png"},
      {rel: "icon", sizes: "62x62", href: "/icons/windows-device-62x62.png"},
      {rel: "icon", sizes: "173x173", href: "/icons/windows-device-173x173.png"},
      {rel: "icon", sizes: "99x99", href: "/icons/windows-device-99x99.png"},
      {rel: "icon", sizes: "200x200", href: "/icons/windows-device-200x200.png"},
      {rel: "icon", sizes: "256x256", href: "/icons/windows-device-256x256.png"}
    ],
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: "utf-8"},
      {
        name: "viewport",
        content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      },
    ]
  },
  plugins: [
    '~plugins/fontawesome.js',
    '~plugins/axios.js'
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  build: {
    extractCSS: true,
  },
  css: [
    '~assets/style/global.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
}
