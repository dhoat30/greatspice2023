'use client'
// import './globals.css'
import { Neuton, Work_Sans } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utlis/themeSettings'
import StyledComponentsRegistry from "./registery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from 'next/script'


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
        {/* google tag manager */}
        {/* <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmTagID}');
        `}
        </Script> */}

        {/* google analytics */}
        <Script id="google-analytics" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-816RB07L7N"> </Script>
        <Script id="google-analtyics-datalayer" strategy="lazyOnload">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-816RB07L7N');
        `}
        </Script>
        {/* facebook pixels */}
        <Script id="facebook-pixels" strategy="lazyOnload">
          {`
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        
        fbq('init', '390839792179259');
        fbq('set','agent','tmgoogletagmanager', '390839792179259');
        fbq('track', "PageView");
        `}
        </Script>
      </head>
      <body >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=390839792179259&ev=PageView&noscript=1" ></iframe>`,
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