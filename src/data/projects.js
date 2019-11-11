import React from "react";

import Noeltner from "../pages/projects/Noeltner";
import Pizziamo from "../pages/projects/Pizziamo";

export default {
  noeltner: {
    name: "noeltner",
    title: "Goldschmiede Karl Nöltner",
    client: "Goldschmiede Nöltner",
    skills: [
      "UI/UX", "Development"
    ],
    size: "medium",
    url: "/project/noeltner",
    intro: "Die Goldschmiede Nöltner sagt der Schmuckindustrie den Kampf an.",
    image: {
      preview: {
        src: "https://cdn.dribbble.com/users/1043407/screenshots/4209431/generalimage_01.png",
        alt: "preview"
      }
    },
    content: <Noeltner />
  },
  
  recipe: {
    name: "recipe",
    title: "Recipe App",
    client: "none",
    skills: [
      "UI/UX"
    ],
    size: "large",
    url: "/project/recipe",
    intro: "none",
    image: {
      preview: {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/fe15c973721869.5c128f44c0e59.png",
        alt: "preview"
      }
    },
  },
  ftpclient: {
    name: "ftpclient",
    title: "FTP Client",
    client: "none",
    skills: [
      "UI/UX"
    ],
    size: "large",
    url: "/project/ftpclient",
    intro: "Announcing a new era of transfering files through the web",
    image: {
      preview: {
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/de16d577264959.5c82711c0becd.png",
        alt: "preview"
      }
    },
  },
  pizziamo: {
    name: "pizziamo",
    title: "Pizziamo",
    client: "Pizziamo Bühl",
    skills: [
      "Design", "Development"
    ],
    size: "small",
    url: "/project/pizziamo",
    intro: "Weil Qualität bekanntlich eine Größe hat.",
    image: {
      preview: {
        src: "https://cdn.dribbble.com/users/2049851/screenshots/8071650/media/3a938ceb66985511792546321fb9fa4f.png",
        alt: "preview"
      }
    },
    content: <Pizziamo />
  }
}
