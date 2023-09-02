export const getContactData = async () => {
    let contactInfoData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=contact-us&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let contactData = await contactInfoData.json();
    return contactData
}
export const getHomeData = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=home&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}

export const getAllMenus = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/menu?acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}
export const getSpecials = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=specials&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}
