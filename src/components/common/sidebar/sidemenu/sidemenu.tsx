export const MENUITEMS = [
  
  {
    menutitle: "Tweet Counts",
    Items: [
      {
        icon: <i className="side-menu__icon bx bx-home"></i>,
        type: "link",
        Name: "",
        active: false,
        selected: false,
        title: "Tweet Counts",
        badge: "",
        class: "badge bg-warning-transparent ms-2",
        path: `${import.meta.env.BASE_URL}tweetcounts/tweetcounts`,
      },
    ],
  },
  {
    menutitle: "Tweet",
    Items: [
      {
        icon: <i className="side-menu__icon bx bx-home"></i>,
        type: "link",
        Name: "",
        active: false,
        selected: false,
        title: "Tweets",
        badge: "",
        class: "badge bg-warning-transparent ms-2",
        path: `${import.meta.env.BASE_URL}tweets/tweets`,
      },
    ],
  },
];
