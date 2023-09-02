import Image from 'next/image'
import HomePage from '@/components/homePage/homePage'
import { Metadata, ResolvingMetadata } from 'next'
import { getContactData, getHomeData, getMenu, getSpecials, getChefSpecials, getGuestReviews } from '@/utlis/fetchData'
import Footer from '@/components/UI/Footer/Footer'
import Header from '@/components/UI/Header/Header'
import MenuPage from '@/components/MenuPage/MenuPage'



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
            url: 'https://greatspicetauranga.co.nz',
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
export default async function Home({ params }) {
    const slug = params.slug
    const contactData = await getContactData()
    const singleMenuData = await getMenu(slug)

    const guestReviewData = await getGuestReviews()
    if (!singleMenuData) {
        return
    }

    const orderOnlineLink = contactData[0].acf.contact_info.order_online
    return (
        <>
            <Header contactData={contactData[0]} />
            <main >
                <MenuPage singleMenuData={singleMenuData[0]} orderOnlineLink={orderOnlineLink} />
            </main>
            <Footer />
        </>

    )
}
