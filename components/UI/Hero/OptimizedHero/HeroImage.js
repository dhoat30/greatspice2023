import { getPageData } from "@/utlis/fetchData";
import Image from "next/image";
import styles from './Hero.module.css'
export default async function HeroImage({ slug }) {
    const data = await getPageData(slug);
    if (!data.length) return null
    const heroData = {
        desktopImage: data[0].acf.hero_section.desktop_image,
        mobileImage: data[0].acf.hero_section.mobile_image,

    };
    return (
        <>
            <div className={`${styles.desktopImageWrapper}`} style={{
                paddingBottom: `${(heroData.desktopImage.height / heroData.desktopImage.width) * 100
                    }%`,
            }}>
                <div className="overlay"></div>
                <Image
                    src={heroData.desktopImage.url}
                    alt={heroData.desktopImage.alt ? heroData.desktopImage.alt : heroData.title}
                    fill
                    priority={true}
                    sizes="100vw"
                    objectFit="cover"
                />
            </div>

        </>

    )
}