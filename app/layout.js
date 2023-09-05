'use client'
// import './globals.css'
import { useEffect } from 'react'
import { Neuton, Work_Sans } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utlis/themeSettings'
import StyledComponentsRegistry from "./registery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from 'next/script'

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
  // get contact data using util function 

  return (
    <html lang="en" className={`${neuton.variable} ${work_sans.variable}`}>
      <body>
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