export default {
  head: {
    titleTemplate: '%s | Taskify Works',
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Bad+Script|Handlee|Roboto:100,300,400,500,700"
      },
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
  build: {
    extractCSS: true,
  },
  css: [
    '~assets/style/global.scss'
  ]
}
