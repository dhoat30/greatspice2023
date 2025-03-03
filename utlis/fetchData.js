const { google } = require('googleapis');

// get page data
export const getPageData = async (slug) => {
    let response = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await response.json();
    return data
}


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
// specials page
export const getSpecials = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=specials&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}
// chef special page 
export const getChefSpecials = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=chefs-special&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}

// guest reviews page 
export const getGuestReviews = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=guest-reviews&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}

// get menu by slug 
export const getMenu = async (slug) => {
    // get tag id first 
    let fetchTagID = await fetch(`${process.env.url}/wp-json/wp/v2/menu-tag?slug=${slug}`, {
        next: { revalidate: 60 },
    });
    let tagData = await fetchTagID.json();

    if (!tagData.length) {
        return
    }
    let tagID = await tagData[0].id

    // now fetch the menu with specific tag id 
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/menu?menu-tag=${tagID}&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}


// get faq page 
export const getFaq = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=faqs&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}

// get host an event page 
export const getEvents = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=host-an-event&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}


// get gallery page 
export const getGallery = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=gallery&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}


// get gallery page 
export const getPage = async (slug) => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}

//get blogs 
export const getBlogs = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/posts?acf_format=standard&per_page=100`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}

//fetch post categories 
export const getPostCategories = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/categories`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}


// fetch single blog 
export const getSinglePost = async (slug) => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/posts?slug=${slug}&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}


// get reivews 
export const getGoogleReviews = async () => {
    // Add revalidation logic
    const nextRevalidateOptions = { next: { revalidate: 30 * 86400 } }; // Revalidate every 30 days

    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const accountId = process.env.GOOGLE_ACCOUNT_ID;
    const locationId = process.env.GOOGLE_LOCATION_ID;

    let allReviews = [];
    let nextPageToken = null;
    let loopLimit = 0 
    do {
        // Fetch reviews from the API
        const response = await oauth2Client.request({
            url: `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`,
            method: "GET",
            params: {
                pageToken: nextPageToken, // Use the nextPageToken for pagination
            },
            ...nextRevalidateOptions, // Pass the revalidate option here
        });

        // Combine the fetched reviews with existing ones
        allReviews = [...allReviews, ...(response.data.reviews || [])];
        nextPageToken = response.data.nextPageToken; // Set the nextPageToken for the next iteration
        loopLimit++
    } while (loopLimit < 2); // Continue until there's no nextPageToken

    return allReviews;
};