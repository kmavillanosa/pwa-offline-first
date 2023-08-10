import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="pwa-demo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="pwa-demo" />
        <meta name="description" content="Best pwa-demo in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/favicon/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/favicon/touch-icon-ipad-retina.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:title" content="pwa-demo" />
        <meta name="twitter:description" content="Best pwa-demo in the world" />
        <meta name="twitter:image" content="/favicon/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="pwa-demo" />
        <meta property="og:description" content="Best pwa-demo in the world" />
        <meta property="og:site_name" content="pwa-demo" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/favicon/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
