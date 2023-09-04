import { getContactData, getFaq, getGuestReviews, getEvents, getGallery, getPage } from '@/utlis/fetchData'
import Footer from '@/components/UI/Footer/Footer'
import Header from '@/components/UI/Header/Header'
import HostEvents from '@/components/HostEvents/HostEvents'
import EnquireNowPage from '@/components/EnquireNowPage/EnquireNowPage'

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    // const id = params.id

    // fetch data
    const data = await getPage('enquire-now')

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
    if (data.length > 0) {
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
                        url: seoData.og_image && seoData.og_image[0].url,
                        width: 800,
                        height: 600,
                    },

                ],
                type: 'website',
            },
        }
    }

}

export default async function Contact() {
    const contactData = await getContactData()
    const guestReviewData = await getGuestReviews()
    const galleryData = await getGallery()
    const pageData = await getPage('enquire-now')

    return (
        <>

            <Header contactData={contactData[0]} />
            <main >
                <EnquireNowPage
                    pageData={pageData[0]} galleryData={galleryData[0]}
                    guestReviewData={guestReviewData[0]}
                    contactData={contactData[0]}
                />
            </main>
            <Footer contactData={contactData[0]} />
        </>

    )
}
