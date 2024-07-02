export const SITE_TITLE = 'Bookmark | Manage your Bookmarks';
export const SITE_DESCRIPTION = 'Bookmark is a simple Bookmark Manager';

export const navLinks: {
    link: string;
    linkTo: string;
}[] = [
        { link: 'Features', linkTo: '/features' },
        { link: 'Pricing', linkTo: '/pricing' },
        { link: 'Contact', linkTo: '/contact' },

    ];

export const footerLinks: {
    link: string;
    linkTo: string;
}[] = [
        { link: 'Home', linkTo: '/' },
        { link: 'Features', linkTo: '/features' },
        { link: 'Pricing', linkTo: '/pricing' },
        { link: 'Contact', linkTo: '/contact' },
    ];

export const socialLinks: {
    link: string;
    icon: string;
    linkTo: string;
}[] = [
        { link: 'Facebook', icon: '/src/assets/icons/icon-facebook.svg', linkTo: 'https://www.facebook.com' },
        { link: 'Twitter', icon: '/src/assets/icons/icon-twitter.svg', linkTo: 'https://www.twitter.com' },

    ];

export const featureList: {
    feature: string;
    tag: string;
    description: string;
    cta: string;
}[] = [
        {
            feature: 'Simple Bookmarking',
            tag: "Bookmark in one click",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.", cta: "More Info",
        },
        {
            feature: 'Speedy Searching',
            tag: "Intelligent search",
            description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.', cta: "More Info",
        },
        {
            feature: 'Easy Sharing',
            tag: "Share your bookmarks",
            description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of abutton.', cta: " More Info",
        },
    ];

export const featureCTAList: {
    action: string;
    call: string;
    browser: string;
    browserIcon: string;
    browserVersion: string;
}[] = [
        {
            action: 'Add to Chrome',
            call: "Add & Install Extension",
            browser: 'Chrome',
            browserIcon: 'src/assets/icons/logo-chrome.svg',
            browserVersion: '62'
        },

        { action: 'Add to Firefox', call: "Add & Install Extension", browser: 'Add & Install Extension', browserIcon: 'src/assets/icons/logo-firefox.svg', browserVersion: '55' },

        { action: 'Add to Opera', call: "Add & Install Extension", browser: 'Add & Install Extension', browserIcon: 'src/assets/icons/logo-opera.svg', browserVersion: '46' },
    ]


export const questionsList: {
    question: string;
    answer: string;
}[] = [
        {
            question: 'What is Bookmark?',
            answer: "Bookmark is a browser extension designed to enhance your browsing experience by making it easy to save and organize web pages you want to revisit later. It seamlessly integrates with your browser, providing a simple interface for adding bookmarks and accessing them across all your devices."
        },
        {
            question: 'How can I request a new browser?',
            answer: "We are always looking to expand our compatibility with various browsers. If you'd like to request support for a new browser, please contact us through our website or social media channels. We appreciate your feedback and will do our best to accommodate your request."
        },
        {
            question: 'Is there a mobile app?',
            answer: "Currently, Bookmark is exclusively available as a browser extension. However, we are exploring the possibility of developing a mobile app in the future. Stay tuned for updates on our progress."
        },
        {
            question: 'What about other Chromium browsers?',
            answer: "While Bookmark was initially designed for specific browsers, we are actively working to expand its compatibility to include other Chromium-based browsers. Our goal is to make Bookmark accessible to users across various platforms and browser preferences."
        },

    ];
