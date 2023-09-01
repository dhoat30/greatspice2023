'use client'
import './globals.css'
import { Neuton, Work_Sans } from 'next/font/google'
import Header from '@/components/UI/Header/Header';
import Footer from '@/components/UI/Footer/Footer';
import { getContactData } from '@/utlis/fetchData';
import StyledComponentsRegistry from "./registery";

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


export default async function RootLayout({ children }) {
  // get contact data using util function 
  let contactData = await getContactData()

  return (
    <html lang="en" className={`${neuton.variable} ${work_sans.variable}`}>
      <body>

        <StyledComponentsRegistry>

          <Header contactData={contactData[0]} />
          {children}
          <Footer />
        </StyledComponentsRegistry>

      </body>
    </html>
  )
}
