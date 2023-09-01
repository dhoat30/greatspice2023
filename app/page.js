import Image from 'next/image'
import styles from './page.module.css'
import HomePage from '@/components/homePage/homePage'
import { Metadata, ResolvingMetadata } from 'next'

export const metadata = {
  title: 'this is title',
  description: 'this is description'
}
export default function Home() {

  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>

      <HomePage />
    </main>
  )
}
