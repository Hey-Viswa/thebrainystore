export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        featured: [
           {
            name: "Editor Picks",
            href:"#",
            ImgSrc : '/nav/ui-kits/mixed.jpg'
           },
           {
            name: "New Arivals",
            href:"#",
            ImgSrc : '/nav/ui-kits/blue.jpg'
           },
           {
            name: "BestSellers",
            href:"#",
            ImgSrc : '/nav/ui-kits/purple.jpg'
           },
        ]   
    },
    {
        label: "Mobile Projects",
        value: "mobile_projects" as const,
        featured: [
           {
            name: "Editor Picks",
            href:"#",
            ImgSrc : '/nav/mobile_projects/fitness.jpg'
           },
           {
            name: "New Arivals",
            href:"#",
            ImgSrc : '/nav/mobile_projects/mobiledev.webp'
           },
           {
            name: "BestSellers",
            href:"#",
            ImgSrc : '/nav/mobile_projects/pomo.jpg'
           },
        ]   ,
    },
    {
        label: "Web Projects",
        value: "web_projects" as const,
        featured: [
           {
            name: "Editor Picks",
            href:"#",
            ImgSrc : '/nav/web_projects/web1.webp'
           },
           {
            name: "New Arivals",
            href:"#",
            ImgSrc : '/nav/web_projects/web2.webp'
           },
           {
            name: "BestSellers",
            href:"#",
            ImgSrc : '/nav/web_projects/web3.webp'
           },
        ]   ,
    }
]