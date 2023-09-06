import { getContactData, getBlogs, getPostCategories, getSinglePost, getPage } from '@/utlis/fetchData'
import Footer from '@/components/UI/Footer/Footer'
import Header from '@/components/UI/Header/Header'

import BlogArchive from '@/components/BlogPage/BlogArchive'
import SingleBlog from '@/components/BlogPage/SingleBlog/SingleBlog'
import PolicyPage from '@/components/PolicyPage/PolicyPage'

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const slug = params.slug

    // fetch data
    const data = await getPage(slug)

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

export default async function Contact({ params }) {
    const slug = params.slug
    const contactData = await getContactData()
    const pageData = await getPage(slug)

    return (
        <>
            <Header contactData={contactData[0]} />
            <main >

                <PolicyPage pageData={pageData[0]} />
            </main>
            <Footer contactData={contactData[0]} />
        </>

    )
}
