import { Suspense } from "react";
import Skeleton from "../../Skeleton/Skeleton";
import { getPageData } from "@/utlis/fetchData";
import HeroContent from "./HeroContent";
import styles from './Hero.module.css'
import HeroImage from "./HeroImage";
export default async function OptimizedHero({ slug }) {
    const data = await getPageData(slug);
    if (!data.length) return null
    const heroData = {
        subtitle: data[0].acf.hero_section.subtitle,
        title: data[0].acf.hero_section.title,
        description: data[0].acf.hero_section.description,
        desktopImage: data[0].acf.hero_section.desktop_image,
        mobileImage: data[0].acf.hero_section.mobile_image,
        callToAction: data[0].acf.hero_section.call_to_action_group.call_to_action
    };
    return (
        <>
            <section className={`${styles.heroSection}`} >
                {heroData.desktopImage && <Suspense fallback={<Skeleton

                    height={`${(heroData.desktopImage.height / heroData.desktopImage.width) * 100
                        }%`} />}>
                    <HeroImage slug={slug} />
                </Suspense>}
                <div className={`${styles.container}`}>
                    <div className={`${styles.wrapper} max-width-xl`}>
                        <HeroContent title={heroData.title} subtitle={heroData.subtitle} description={heroData.description} ctaLabel={heroData.ctaLabel} callToAction={heroData.callToAction} />
                    </div>
                </div>

            </section>


        </>

    )
}