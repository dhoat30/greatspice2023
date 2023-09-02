import Image from 'next/image'
import HomePage from '@/components/homePage/homePage'
import { Metadata, ResolvingMetadata } from 'next'
import { getHomeData, getAllMenus, getSpecials } from '@/utlis/fetchData'

export const metadata = {
  title: 'this is title',
  description: 'this is description'
}


export default async function Home() {
  const homeData = await getHomeData()
  const menuData = await getAllMenus()
  const specialsData = await getSpecials()
  console.log(specialsData)
  return (
    <main >
      <HomePage homeData={homeData[0]} menuData={menuData} specialsData={specialsData[0]} />
    </main>
  )
}
