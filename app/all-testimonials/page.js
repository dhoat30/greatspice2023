import { getContactData, getGoogleReviews, getAllMenus, getSpecials, getFaq, getGuestReviews, getPage, getGallery } from '@/utlis/fetchData'
import Header from '@/components/UI/Header/Header'
import Footer from '@/components/UI/Footer/Footer'
import GoogleReviewGridLayout from '@/components/UI/GoogleReviews/GoogleReviewGridLayout'
import BreadcrumbHero from '@/components/UI/Hero/BreadcrumbHero'
export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const slug = params.slug

    // fetch data
    const data = await getPage('testimonials')

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    if (data.length > 0) {
        const seoData = data[0].yoast_head_json
        return {
            title: seoData.title,
            description: seoData.description,
            metadataBase: new URL(process.env.siteUrl),
            alternates: {
                canonical: `${process.env.siteUrl}/all-testimonials`, 
              },
            openGraph: {
                title: seoData.title,
                description: seoData.description,
                url: process.env.siteUrl,
                siteName: process.env.name,
                images: [
                    {
                        url: seoData?.og_image && seoData?.og_image[0]?.url,
                        width: 800,
                        height: 600,
                    }, {
                        url: seoData?.og_image && seoData?.og_image[0].url,
                        width: 1800,
                        height: 1600,
                    },

                ],
                type: 'website',
            },
        }
    }

}

export default async function Contact({ params }) {
    const contactData = await getContactData()

    const postData = await getPage('testimonials')
    const googleReviewsData = await getGoogleReviews()  
console.log(postData)
    if (!postData) {
        return {
            notFound: true,
        }
    }
    return (
        <>
             <Header contactData={contactData[0]} />
            <main>
                <BreadcrumbHero title={postData[0]?.title.rendered} description={postData[0]?.content.rendered} showBreadcrumb={false} showPattern={false} /> 
                <GoogleReviewGridLayout data={googleReviewsData}/> 

            </main>
            <Footer contactData={contactData[0]} />
        </>

    )
}
