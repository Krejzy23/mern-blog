import { clerkIcon, gsapIcon, nextIcon, reactIcon, tailIcon, threeIcon, tsIcon } from "../assets";
import { bioIcon1, bioIcon2, bioIcon3, bioIcon4,p1,p2,p3,p4 } from "../assets";

export const category = [
  {
    id: "1",
    title: "Movie",
    color: ["#007BFF"],
  },
  {
    id: "2",
    title: "Mystery",
    color: ["#FFEA00"],
  },
  {
    id: "3",
    title: "Cooking",
    color: ["#FF00FF"],
  },
  {
    id: "4",
    title: "Lifestyle",
    color: ["#FF6A00"],
  },
  {
    id: "5",
    title: "Nature",
    color: ["#39FF14"],
  },
  {
    id: "6",
    title: "ChatGPT",
    color: ["#FF1B1C"],
  },
  {
    id: "7",
    title: "Crypto",
    color: ["#00F4D1"],
  },
  {
    id: "8",
    title: "Coding",
    color: ["#9B00FF"],
  },
  {
    id: "9",
    title: "History",
    color: ["#FF499E"],
  },
];

export const styles = {
  // hero section
  heroHeading:
    "font-semibold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase",
  heroOText:
    "md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[35px] md:border-[18px] border-[8px] rounded-full border-gray-700 sm:mx-2 mx-[6px]",
};

export const bioText =
  "With full control of our smart AI-powered quantum processor-driven project management system, you can't go wrong.";

export const bioContent = [
  {
    id: "0",
    title: "Top-notch security",
  },
  {
    id: "1",
    title: "Ai based system",
  },
  {
    id: "2",
    title: "Project description",
    text: bioText,
  },
];

export const lifeText =
  "We offer guaranteed tips on how to easily reboot your current lifestyle.";
export const lifeHackText =
  "When you reach a new level of mind, you can look forward to initiation into an elite group where you can express your views freely and non-violently.";
export const lifeTextNote =
  "Free orange vest, handkerchiefss and a epoxy resin are in bio quality!";

export const lifeContent = [
  {
    id: "0",
    title: "Make your life happier",
  },
  {
    id: "1",
    title: "Follow guaranteed tips",
    text: lifeText,
  },
  {
    id: "2",
    title: "A new level of thinking",
    text: lifeHackText,
  },
  {
    id: "3",
    title: "Bonus for newcomers",
    text: lifeTextNote,
  },
];

export const bioIcons = [
  { id: "1", src: bioIcon1, text: "Morphing" },
  { id: "2", src: bioIcon2, text: "Science" },
  { id: "3", src: bioIcon3, text: "Code" },
  { id: "4", src: bioIcon4, text: "Virus" },
];

// ANIMACE VAULT BOY

export const ANIM_DURATION = 2;
export const ANIM_EASE = "sine.inOut";
export const animations = [
  {
    selector: ".span1",
    rotation: 10,
    transformOrigin: "bottom right",
  },
  {
    selector: ".span2",
    rotation: -8,
    transformOrigin: "top left",
  },
  {
    selector: ".span3",
    rotation: 12,
    transformOrigin: "top left",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Image SaaS - Canva Application" ,
    text: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack." ,
    img: p1,
    iconLists: [reactIcon, tailIcon, tsIcon, threeIcon, clerkIcon],
    link: "https://image-ai-nu.vercel.app/",
  },
  {
    id: 2,
    title: "Animated Apple Iphone 3D Website" ,
    text: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: p2,
    iconLists: [nextIcon, tailIcon, tsIcon, threeIcon, gsapIcon],
    link: "https://i-phone15-pro.vercel.app/",
  },
  {
    id: 3,
    title: "3D animated portfolio" ,
    text: "Beautiful profesional developer portolio with Three.js animations",
    img: p3,
    iconLists: [reactIcon ,tailIcon, threeIcon],
    link: "https://developer-portfolio-green.vercel.app/",
  },
  {
    id: 4,
    title: "Event application" ,
    text: "The events application on Next.js 14 manages and showcases global events, with Stripe integration for ticket purchases and event management.",
    img: p4,
    iconLists: [nextIcon, tailIcon, tsIcon,clerkIcon],
    link: "https://events-platform-mu.vercel.app/",
  },

]