export const headerLinks = [{
    id: 1,
    title: "Home",
    url: "/"
},
{
    id: 2,
    title: "Specials",
    url: "/specials"
},
{
    id: 4,
    title: "Reservation",
    url: "/reservation"
},
{
    id: 3,
    title: "Menu",
    url: "/menu",
    subLinks: [
        { title: "Lunch", url: "/menu/lunch-menu", id: "lunch" },
        { title: "Dine-In", url: "/menu/dine-in-menu", id: "dine-in" },
        { title: "Takeaway", url: "/menu/takeaway-menu", id: "takeaway" },
        { title: "Catering", url: "/menu/catering-menu", id: "takeaway" },
    ]
},


{
    id: 5,
    title: "Catering",
    url: "/catering",
    subLinks: [
        { title: "Host Events", url: "/host-events", id: "host-events" },
        { title: "Catering", url: "/catering", id: "catering" },
        { title: "Catering Packages", url: "/catering/packages", id: "catering-packages" },
        { title: "Enquire Now", url: "/host-events/enquire", id: "enquire-now" },
    ]
},
{
    id: 5,
    title: "Gallery",
    url: "/gallery"
},
{
    id: 7,
    title: "Contact",
    url: "/contact",
    subLinks: [
        { title: "FAQ's", url: "/faq", id: "faqs" },
        { title: "About Us", url: "/about-us", id: "about-us" },
        { title: "Contact", url: "/contact", id: "contact" },

    ]
},
]