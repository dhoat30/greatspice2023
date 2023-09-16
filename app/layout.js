'use client'
// import './globals.css'
import { Neuton, Work_Sans } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utlis/themeSettings'
import StyledComponentsRegistry from "./registery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from 'next/script'
import Head from 'next/head'
import { useRouter } from 'next/navigation';

// fonts settings
const neuton = Neuton({
  weight: ['200', '300', '400', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-neuton'
})
const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans'
})


export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Great Spice Tauranga",
    "alternateName": "Great Spice",
    "url": "https://www.greatspicetauranga.co.nz"
  }
  // get contact data using util function 
  const gtmTagID = "GTM-5H7BDXH"
  return (
    <html lang="en" className={`${neuton.variable} ${work_sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmTagID}');
        `}
        </Script>
      </head>
      <body >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmTagID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            {/* <Suspense fallback={<Loading />} /> */}

            {children}

            {/* <Header contactData={contactData[0]} /> */}

            {/* <Footer contactData={contactData[0]} /> */}
          </StyledComponentsRegistry>
        </ThemeProvider>
        {/* hubspot code  */}
        <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/43725361.js"></Script>

      </body>
    </html>
  )
}