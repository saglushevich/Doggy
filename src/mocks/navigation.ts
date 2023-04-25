import { ROUTES } from "@constants";

const { home, about, appointment, blog, contacts, info, services } = ROUTES;

const NAVIGATION_ENG = [
  {
    id: "navigation-1",
    title: "Home",
    link: home,
  },
  {
    id: "navigation-2",
    title: "Info",
    link: info,
  },
  {
    id: "navigation-3",
    title: "Spa Services",
    link: services,
  },
  {
    id: "navigation-4",
    title: "Book Appointment",
    link: appointment,
  },
  {
    id: "navigation-5",
    title: "Blog",
    link: blog,
  },
  {
    id: "navigation-6",
    title: "About Us",
    link: about,
  },
  {
    id: "navigation-7",
    title: "Contact Us",
    link: contacts,
  },
];

const NAVIGATION_RUS = [
  {
    id: "navigation-1",
    title: "Домашняя",
    link: home,
  },
  {
    id: "navigation-2",
    title: "Инфо",
    link: info,
  },
  {
    id: "navigation-3",
    title: "Услуги",
    link: services,
  },
  {
    id: "navigation-4",
    title: "Запись",
    link: appointment,
  },
  {
    id: "navigation-5",
    title: "Блог",
    link: blog,
  },
  {
    id: "navigation-6",
    title: "О Нас",
    link: about,
  },
  {
    id: "navigation-7",
    title: "Контакты",
    link: contacts,
  },
];

export const NAVIGATION = {
  en: NAVIGATION_ENG,
  ru: NAVIGATION_RUS,
};
