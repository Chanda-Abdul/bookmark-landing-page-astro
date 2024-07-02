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
        {
            link: 'Facebook',
            icon: '/src/assets/icons/icon-facebook.svg',
            linkTo: 'https://www.facebook.com'
        },
        {
            link: 'Twitter',
            icon: '/src/assets/icons/icon-twitter.svg',
            linkTo: 'https://www.twitter.com'
        },
    ];

export const featureListBasic: {
    feature: string;
    tag: string;
    description: string;
    cta: string;
    illustration: string;
}[] = [
        {
            feature: 'Simple Bookmarking',
            tag: "Bookmark in one click",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
            cta: "More Info",
            illustration: "/src/assets/images/illustration-features-tab-1.svg"
        },


        {
            feature: 'Speedy Searching',
            tag: "Intelligent search",
            description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
            cta: "More Info",
            illustration: "/src/assets/images/illustration-features-tab-2.svg"

        },
        {
            feature: 'Easy Sharing',
            tag: "Share your bookmarks",
            description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
            cta: "More Info",
            illustration: "/src/assets/images/illustration-features-tab-3.svg"
        },


        {
            feature: 'Social Sharing',
            tag: "Seamless Sharing",
            description: 'Embed bookmarks on your social media pages or websites to expand your reach.',
            cta: "More Info",
            illustration: "/src/assets/images/illustration-features-tab-3.svg"
        },
        {
            feature: 'Collaborative Collections',
            tag: "Collaborate with Friends",
            description: "Invite friends, colleagues, or communities to build shared bookmark collections. Work together to curate knowledge.", cta: "More Info",
            illustration: "/src/assets/images/illustration-features-tab-3.svg"
        },
        {
            feature: 'Browser Integration',
            tag: "Enhanced Browsing Experience",
            description: "Bookmark works seamlessly with your favorite browsers, making it simple to save and access your bookmarks. ",
            cta: "More Info",
            illustration: "/src/assets/images/illustration-features-tab-3.svg"
        }, {
            feature: 'Cross-Device Sync',
            tag: "Enhanced Browsing Experience",
            description: "Access your bookmarks from any device. Keep your knowledge synced acrossyour computer, phone, and tablet.",
            cta: "More Info",
            illustration: "/src/assets/images/illustration-features-tab-3.svg"
        },
    ];


export const featureListPremium: {
    feature: string;
    tag: string;
    description: string;
    cta?: string;
    illustration: string;
}[] = [
        {
            feature: 'Advanced Customization',
            tag: "Tailor your Bookmark Experience",
            description: "Personalize your Bookmark experience with custom themes and layouts.",
            illustration: "/src/assets/images/illustration-features-tab-1.svg"
        },

        {
            feature: 'Priority Support',
            tag: "Worldclass Support",
            description: "Get faster responses to your questions and priority issue resolution.",
            illustration: "/src/assets/images/illustration-features-tab-1.svg"
        },
        {
            feature: 'Enhanced Collaboration',
            tag: "Share and Collaborate",
            description: "Unlock powerful collaborative tools for seamless teamwork.",
            illustration: "/src/assets/images/illustration-features-tab-1.svg"
        },
        {
            feature: 'Secure Storage',
            tag: "Store your bookmarks",
            description: "Your bookmarks are stored securely on our servers, protected byindustry-leading security measures.",
            illustration: "/src/assets/images/illustration-features-tab-1.svg"
        },
        {
            feature: 'Data Privacy',
            tag: "You can trust us with your data",
            description: "We never share your data with third parties without your consent. Your privacy is our priority.",
            illustration: "/src/assets/images/illustration-features-tab-1.svg"
        },
    ]

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
        {
            action: 'Add to Firefox',
            call: "Add & Install Extension",
            browser: 'Add & Install Extension',
            browserIcon: 'src/assets/icons/logo-firefox.svg',
            browserVersion: '55'
        },
        {
            action: 'Add to Opera',
            call: "Add & Install Extension",
            browser: 'Add & Install Extension',
            browserIcon: 'src/assets/icons/logo-opera.svg',
            browserVersion: '46'
        },
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
        {
            question: 'Can I share my bookmarks with others?',
            answer: "Yes! Bookmark allows you to create shareable links or embed your bookmarks on social media or websites. You can also collaborate with others by creating shared bookmark collections."
        },
        {
            question: 'Is my data secure?',
            answer: "We take data security seriously. Your bookmarks are stored securely on our servers, and we implement robust measures to protect your information. We never share your data with third parties without your consent."
        },
        {
            question: 'Can I import bookmarks from other tools?',
            answer: "Yes, we offer options to import bookmarks from popular browsers and bookmark managers. This makes it easy to transition to Bookmark while retaining your existing bookmarks."
        },
        {
            question: 'How do I organize my bookmarks?',
            answer: "Bookmark provides several organization features, including folders, tags, and a powerful search function. You can categorize bookmarks, add labels, and quickly find what you need."
        },
        {
            question: 'Are there any premium features?',
            answer: "We offer both free and premium versions of Bookmark. The free version provides robust bookmarking capabilities, while the premium version includes additional features like advanced customization, collaborative tools, and priority support."
        },
        {
            question: 'How can I provide feedback or report issues?',
            answer: "We welcome your feedback! You can contact us through our website's contact form or social media channels to report any issues you encounter or share suggestions for improvement."
        }
    ];
