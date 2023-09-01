export const getContactData = async () => {
    let contactInfoData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=contact-us&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let contactData = await contactInfoData.json();
    return contactData
}
