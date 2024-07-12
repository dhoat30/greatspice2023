'use client'
// import './globals.css'
import { Neuton, Work_Sans } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utlis/themeSettings'
import StyledComponentsRegistry from "./registery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'


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
  return (
    <html lang="en" className={`${neuton.variable} ${work_sans.variable}`}>

      <GoogleTagManager gtmId="GTM-5H7BDXH" />


      <body >

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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