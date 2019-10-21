import React from "react";

import Noeltner from "../pages/projects/Noeltner";

export default {
  noeltner: {
    name: "noeltner",
    title: "Goldschmiede Nöltner",
    client: "Goldschmiede Nöltner",
    size: "medium",
    url: "/project/noeltner",
    intro: "Die Goldschmiede Nöltner sagt der Schmuckindustrie den Kampf an.",
    image: {
      preview: {
        src: "https://cdn.dribbble.com/users/1043407/screenshots/4209431/generalimage_01.png",
        alt: "preview"
      }
    },
    content: <Noeltner/>
  },
  
  recipe: {
    name: "recipe",
    title: "Recipe App",
    client: "none",
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
  doctor: {
    name: "doctor",
    title: "Doctor Landing page",
    client: "none",
    size: "small",
    url: "/project/doctor",
    intro: "Announcing a new era of transfering files through the web",
    image: {
      preview: {
        src: "https://cdn.dribbble.com/users/2049851/screenshots/6851492/web_2x.png",
        alt: "preview"
      }
    }
  }
}
