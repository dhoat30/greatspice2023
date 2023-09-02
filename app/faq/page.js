import HomePage from '@/components/homePage/homePage'
import { getContactData, getHomeData, getAllMenus, getSpecials, getFaq, getGuestReviews } from '@/utlis/fetchData'
import Footer from '@/components/UI/Footer/Footer'
import Header from '@/components/UI/Header/Header'
import MenuArchivePage from '@/components/MenuPage/MenuArchivePage'
import FaqPage from '@/components/FaqPage/FaqPage'

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

export default async function Faq() {
    const contactData = await getContactData()
    const guestReviewData = await getGuestReviews()
    const faqData = await getFaq()
    return (
        <>
            <Header contactData={contactData[0]} />
            <main >
                <FaqPage guestReviewData={guestReviewData[0]}
                    faqData={faqData[0]}
                />


            </main>
            <Footer />
        </>

    )
}
