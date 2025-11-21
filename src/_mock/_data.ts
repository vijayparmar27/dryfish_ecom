import { getAssetPath } from "@/utils/get-asset-path";
import {
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _taskNames,
  _postTitles,
  _description,
  _productNames,
  _id,
} from "./_mock1";

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: "Jaydon Frankie",
  email: "demo@minimals.cc",
  photoURL: getAssetPath("/assets/images/avatar/avatar-25.webp"),
};

// ----------------------------------------------------------------------

export const _users = [...Array(24)].map((_, index) => ({
  id: _id(index),
  name: _fullName(index),
  company: _company(index),
  isVerified: _boolean(index),
  avatarUrl: getAssetPath(`/assets/images/avatar/avatar-${index + 1}.webp`),
  status: index % 4 ? "active" : "banned",
  role:
    [
      "Leader",
      "Hr Manager",
      "UI Designer",
      "UX Designer",
      "UI/UX Designer",
      "Project Manager",
      "Backend Developer",
      "Full Stack Designer",
      "Front End Developer",
      "Full Stack Developer",
    ][index] || "UI Designer",
}));

// ----------------------------------------------------------------------

export const _posts = [...Array(23)].map((_, index) => ({
  id: _id(index),
  title: _postTitles(index),
  description: _description(index),
  coverUrl: getAssetPath(`/assets/images/cover/cover-${index + 1}.webp`),
  totalViews: 8829,
  totalComments: 7977,
  totalShares: 8556,
  totalFavorites: 8870,
  postedAt: _times(index),
  author: {
    name: _fullName(index),
    avatarUrl: getAssetPath(`/assets/images/avatar/avatar-${index + 1}.webp`),
  },
}));

// ----------------------------------------------------------------------

const COLORS = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];

export const _products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: _id(index),
    price: _price(index),
    name: _productNames(index),
    priceSale: setIndex % 3 ? null : _price(index),
    coverUrl: getAssetPath(`/assets/images/product/product-${setIndex}.webp`),
    colors:
      (setIndex === 1 && COLORS.slice(0, 2)) ||
      (setIndex === 2 && COLORS.slice(1, 3)) ||
      (setIndex === 3 && COLORS.slice(2, 4)) ||
      (setIndex === 4 && COLORS.slice(3, 6)) ||
      (setIndex === 23 && COLORS.slice(4, 6)) ||
      (setIndex === 24 && COLORS.slice(5, 6)) ||
      COLORS,
    status:
      ([1, 3, 5].includes(setIndex) && "sale") ||
      ([4, 8, 12].includes(setIndex) && "new") ||
      "",
    category:
      (setIndex % 3 === 0 && "shose") ||
      (setIndex % 3 === 1 && "apparel") ||
      "accessories",
  };
});

// ----------------------------------------------------------------------

export const _langs = [
  {
    value: "en",
    label: "English",
    icon: getAssetPath("/assets/icons/flags/ic-flag-en.svg"),
  },
  {
    value: "de",
    label: "German",
    icon: getAssetPath("/assets/icons/flags/ic-flag-de.svg"),
  },
  {
    value: "fr",
    label: "French",
    icon: getAssetPath("/assets/icons/flags/ic-flag-fr.svg"),
  },
];

// ----------------------------------------------------------------------

export const _timeline = [...Array(5)].map((_, index) => ({
  id: _id(index),
  title: [
    "1983, orders, $4220",
    "12 Invoices have been paid",
    "Order #37745 from September",
    "New order placed #XF-2356",
    "New order placed #XF-2346",
  ][index],
  type: `order${index + 1}`,
  time: _times(index),
}));

export const _traffic = [
  {
    value: "facebook",
    label: "Facebook",
    total: 19500,
  },
  {
    value: "google",
    label: "Google",
    total: 91200,
  },
  {
    value: "linkedin",
    label: "Linkedin",
    total: 69800,
  },
  {
    value: "twitter",
    label: "Twitter",
    total: 84900,
  },
];

export const _tasks = Array.from({ length: 5 }, (_, index) => ({
  id: _id(index),
  name: _taskNames(index),
}));

// ----------------------------------------------------------------------

export const _notifications = [
  {
    id: _id(1),
    title: "Your order is placed",
    description: "waiting for shipping",
    avatarUrl: null,
    type: "order-placed",
    postedAt: _times(1),
    isUnRead: true,
  },
  {
    id: _id(2),
    title: _fullName(2),
    description: "answered to your comment on the Minimal",
    avatarUrl: getAssetPath("/assets/images/avatar/avatar-2.webp"),
    type: "friend-interactive",
    postedAt: _times(2),
    isUnRead: true,
  },
  {
    id: _id(3),
    title: "You have new message",
    description: "5 unread messages",
    avatarUrl: null,
    type: "chat-message",
    postedAt: _times(3),
    isUnRead: false,
  },
  {
    id: _id(4),
    title: "You have new mail",
    description: "sent from Guido Padberg",
    avatarUrl: null,
    type: "mail",
    postedAt: _times(4),
    isUnRead: false,
  },
  {
    id: _id(5),
    title: "Delivery processing",
    description: "Your order is being shipped",
    avatarUrl: null,
    type: "order-shipped",
    postedAt: _times(5),
    isUnRead: false,
  },
];

export const carouselItems = [
  {
    id: "1",
    title: "The future is built on Artificial Intelligence",
    description: "Transform your business with cutting-edge AI solutions",
    image: "/futuristic-artificial-intelligence.jpg",
    buttonText: "Learn More",
    buttonLink: "https://www.example.com/ai",
  },
  {
    id: "2",
    title: "Modern Design, Timeless Experience",
    description: "Create stunning interfaces that captivate your audience",
    image: "/modern-minimalist-design.png",
    buttonText: "Explore Design",
    buttonLink: "https://www.example.com/design",
  },
  {
    id: "3",
    title: "Innovation Meets Simplicity",
    description: "Build products that users love and teams scale",
    image: "/tech-innovation-productivity.jpg",
    buttonText: "Start Building",
    buttonLink: "https://www.example.com/build",
  },
  {
    id: "4",
    title: "Connect, Collaborate, Create",
    description: "Empower your team with seamless tools",
    image: "/team-collaboration-workspace.png",
    buttonText: "Join Us",
    buttonLink: "https://www.example.com/join",
  },
];
