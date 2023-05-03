import { ROUTES } from "@constants";

const { blog, home, about, contacts } = ROUTES;

export const FOOTER_LINKS = {
  customerService: [
    {
      id: "link-1",
      link: blog,
      title: "blog",
    },
    {
      id: "link-2",
      link: home,
      title: "cancellations",
    },
    {
      id: "link-3",
      link: home,
      title: "track",
    },
    {
      id: "link-4",
      link: home,
      title: "annual day",
    },
    {
      id: "link-5",
      link: home,
      title: "payment options",
    },
  ],

  navigation: [
    {
      id: "link-1",
      link: home,
      title: "home",
    },
    {
      id: "link-2",
      link: about,
      title: "about",
    },
    {
      id: "link-3",
      link: contacts,
      title: "contact us",
    },
    {
      id: "link-4",
      link: home,
      title: "FAQs",
    },
    {
      id: "link-5",
      link: home,
      title: "help",
    },
  ],
};
