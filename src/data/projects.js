import React from "react";

import Noeltner from "../pages/projects/Noeltner";
import Pizziamo from "../pages/projects/Pizziamo";
import FTPClient from "../pages/projects/FTPClient";
import Recipe from "../pages/projects/Recipe";

export default {
  noeltner: {
    name: "noeltner",
    title: "Goldschmiede Karl Nöltner",
    client: "Goldschmiede Nöltner",
    demo: {
      text: "goldschmiede-noeltner.com",
      url: "https://goldschmiede-noeltner.com"
    },
    skills: [
      "UI/UX", "Development"
    ],
    size: "medium",
    url: "/project/noeltner",
    intro: "Die Goldschmiede Nöltner distanziert sich von der Massenindustrie.",
    image: {
      preview: {
        src: require("../assets/img/projects/noeltner/preview.png"),
        alt: "preview"
      },
      landing: {
        src: require("../assets/img/projects/noeltner/landing.svg"),
        alt: "landing page fullscreen"
      },
      profile: {
        src: require("../assets/img/projects/noeltner/profile.gif"),
        alt: "profile interaction"
      }
    },
    content: <Noeltner />
  },
  recipe: {
    name: "recipe",
    title: "Recipe App",
    client: "-",
    demo: {
      text: "-"
    },
    skills: [
      "UI/UX"
    ],
    size: "large",
    url: "/project/recipe",
    intro: "Tomaten vom Feinsten",
    image: {
      preview: {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/fe15c973721869.5c128f44c0e59.png",
        alt: "preview"
      }
    },
    content: <Recipe />
  },
  ftpclient: {
    name: "ftpclient",
    title: "FTP Client",
    client: "-",
    demo: {
      text: "-"
    },
    skills: [
      "UI/UX"
    ],
    size: "large",
    url: "/project/ftpclient",
    intro: "Ein neuer Anstrich für die vielen veralteten FTP Programme",
    image: {
      preview: {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/de16d577264959.5c82711c0becd.png",
        alt: "preview"
      },
      stats: {
        src: require("../assets/img/projects/ftpclient/stats@2x.png")
      },
      terminal: {
        src: require("../assets/img/projects/ftpclient/terminal@2x.png")
      },
      filemanager: {
        src: require("../assets/img/projects/ftpclient/filemanager@2x.png")
      }
    },
    content: <FTPClient />
  },
  pizziamo: {
    name: "pizziamo",
    title: "Pizziamo",
    client: "Pizziamo Bühl",
    demo: {
      text: "pizziamo-buehl.de",
      url: "https://pizziamo-buehl.de"
    },
    skills: [
      "Design", "Development"
    ],
    size: "small",
    url: "/project/pizziamo",
    intro: "40cm Ø",
    image: {
      preview: {
        src: require("../assets/img/projects/pizziamo/preview.png"),
        alt: "preview"
      },
      overview: {
        src: "https://cdn.dribbble.com/users/2049851/screenshots/8071650/media/3a938ceb66985511792546321fb9fa4f.png",
        alt: "overview"
      },
      menucard: {
        src: require("../assets/img/projects/pizziamo/menucard.jpg"),
        alt: "menucard"
      },
      landing: {
        src: require("../assets/img/projects/pizziamo/landing.png"),
        alt: "landing page fullscreen"
      },
      menu: {
        src: require("../assets/img/projects/pizziamo/menu.png"),
        alt: "menu page fullscreen"
      }
    },
    content: <Pizziamo />
  }
}
