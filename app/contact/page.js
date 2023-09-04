import HomePage from '@/components/homePage/homePage'
import { getContactData, getHomeData, getAllMenus, getSpecials, getFaq, getGuestReviews } from '@/utlis/fetchData'
import Footer from '@/components/UI/Footer/Footer'
import Header from '@/components/UI/Header/Header'
import MenuArchivePage from '@/components/MenuPage/MenuArchivePage'
import FaqPage from '@/components/FaqPage/FaqPage'
import ContactPage from '@/components/ContactPage/ContactPage'

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    // const id = params.id

    // fetch data
    const data = await getContactData()

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
    const faqData = await getFaq()

    const seoData = contactData[0].yoast_head_json
    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - Great Spice Tauranga",
        "description": seoData.description,
        "url": "https://www.greatspicetauranga.co.nz/contact",
        "telephone": contactData[0].acf.contact_info.phone_number,
        "email": contactData[0].acf.contact_info.email,
        "publisher": {
            "@type": "Organization",
            "name": "Great Spice Tauranga",
            "url": "https://www.greatspicetauranga.co.nz",
            "logo": contactData[0].acf.logo.url,
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": contactData[0].acf.contact_info.phone_number,
                "contactType": "Customer Service"
            }
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header contactData={contactData[0]} />
            <main >
                <ContactPage contactData={contactData[0]}
                    guestReviewData={guestReviewData[0]}
                />

            </main>
            <Footer contactData={contactData[0]} />
        </>

    )
}
