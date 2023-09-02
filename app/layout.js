'use client'
// import './globals.css'
import { Neuton, Work_Sans } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import Header from '@/components/UI/Header/Header';
import Footer from '@/components/UI/Footer/Footer';
import { theme } from '../utlis/themeSettings'
import { getContactData } from '@/utlis/fetchData';
import StyledComponentsRegistry from "./registery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

            {/* <Header contactData={contactData[0]} /> */}
            {children}
            {/* <Footer /> */}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
