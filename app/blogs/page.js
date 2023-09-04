import { getContactData, getBlogs, getPostCategories } from '@/utlis/fetchData'
import Footer from '@/components/UI/Footer/Footer'
import Header from '@/components/UI/Header/Header'

import BlogArchive from '@/components/BlogPage/BlogArchive'

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
            title: "Delicious Reads: Culinary Adventures & Tips | Great Spice Blog",
            description: "Indulge in the latest culinary trends, mouth-watering recipes, and behind-the-scenes stories from Great Spice. Stay in the loop with our must-read restaurant blog.",
            openGraph: {
                title: "Delicious Reads: Culinary Adventures & Tips | Great Spice Blog",
                description: "Indulge in the latest culinary trends, mouth-watering recipes, and behind-the-scenes stories from Great Spice. Stay in the loop with our must-read restaurant blog.",
                url: 'https://greatspicetauranga.co.nz',
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

    const blogData = await getBlogs() // get all blogs
    const blogCategories = await getPostCategories() // get all blogs categories
    return (
        <>

            <Header contactData={contactData[0]} />
            <main >
                <BlogArchive
                    blogData={blogData}
                    contactData={contactData[0]}
                    blogCategoriesData={blogCategories}
                />

            </main>
            <Footer contactData={contactData[0]} />
        </>

    )
}
