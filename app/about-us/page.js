import {
  getContactData,
  getFaq,
  getGuestReviews,
  getEvents,
  getGallery,
  getPage,
  getGoogleReviews
} from "@/utlis/fetchData";
import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import HostEvents from "@/components/HostEvents/HostEvents";
import EnquireNowPage from "@/components/EnquireNowPage/EnquireNowPage";
import CateringPage from "@/components/CateringPage/CateringPage";
import AboutPage from "@/components/AboutPage/AboutPage";
import GuestReviewSection from "@/components/homePage/GuestReviewSection/GuestReviewSection";
import MobileReviewSection from "@/components/homePage/GuestReviewSection/MobileReviewSection";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id

  // fetch data
  const data = await getPage("about-us");

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  if (data.length > 0) {
    const seoData = data[0].yoast_head_json;
    return {
      title: seoData.title,
      description: seoData.description,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        url: "https://www.greatspicetauranga.co.nz",
        siteName: "greatspicetauranga.co.nz",
        images: [
          {
            url: seoData.og_image && seoData.og_image[0].url,
            width: 800,
            height: 600,
          },
        ],
        type: "website",
      },
    };
  }
}

export default async function Contact() {
  const contactData = await getContactData();

  const pageData = await getPage("about-us");
  const googleReviewsData = await getGoogleReviews()  
  const guestReviewData = await getGuestReviews()

  return (
    <>
      <Header contactData={contactData[0]} />
      <main>
        <AboutPage
          aboutData={pageData[0]}
        />
       <GuestReviewSection 
        data={googleReviewsData} title= {guestReviewData[0].title.rendered} sectionImage={guestReviewData[0].acf.image}
        /> 
  <MobileReviewSection  data={googleReviewsData} title= {guestReviewData[0].title.rendered}/> 
  </main>
      <Footer contactData={contactData[0]} />
    </>
  );
}
