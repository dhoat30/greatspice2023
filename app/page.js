import HomePage from '@/components/homePage/homePage'
import { getContactData, getHomeData, getAllMenus, getSpecials, getChefSpecials, getGuestReviews, getPage, getEvents } from '@/utlis/fetchData'
import Footer from '@/components/UI/Footer/Footer'
import Header from '@/components/UI/Header/Header'
import OptimizedHero from '@/components/UI/Hero/OptimizedHero/OptimizedHero'



export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id

  // fetch data
  const data = await getHomeData()

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  const seoData = data[0].yoast_head_json
  return {
    title: seoData.title,
    description: seoData.description,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: 'https://www.greatspicetauranga.co.nz',
      siteName: 'greatspicetauranga.co.nz',
      images: [
        {
          url: seoData.og_image[0] && seoData.og_image[0].url,
          width: 800,
          height: 600,
        },

      ],
      type: 'website',
    },
  }
}
export default async function Home() {
  const contactData = await getContactData()
  const homeData = await getHomeData()
  const menuData = await getAllMenus()
  const specialsData = await getSpecials()
  const chefSpecialsData = await getChefSpecials()
  const guestReviewData = await getGuestReviews()
  const cateringData = await getPage('catering')
  const eventsData = await getEvents()

  return (
    <>
      <Header contactData={contactData[0]} />
      <main >
        <OptimizedHero slug="home" />
        <HomePage
          homeData={homeData[0]}
          menuData={menuData}
          specialsData={specialsData[0]}
          chefSpecialsData={chefSpecialsData[0]}
          guestReviewData={guestReviewData[0]}
          cateringData={cateringData[0]}
          eventsData={eventsData[0]}
        />
      </main>
      <Footer contactData={contactData[0]} />
    </>

  )
}
