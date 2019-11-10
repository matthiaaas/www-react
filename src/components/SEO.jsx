import React, { Component } from "react";
import Helmet from "react-helmet";

class SEO extends Component {
  render() {
    const defaultTitle = "Matthias — Freelance Webdesigner and Frontend Developer";
    const title = this.props.title || defaultTitle;

    const defaultDescription = "15 jähriger Webdesigner und Frontend-Developer"
    const description = this.props.description || defaultDescription;

    const preview = require("../assets/img/preview.png");

    return (
      <Helmet
        defaultTitle={defaultTitle}
        title={title}

        link={[
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Poppins:600&display=swap"
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Playfair+Display:700,900&display=swap"
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Raleway:500,700&display=swap"
          }
        ]}

        meta={[
          {
            name: "theme-color",
            content: "#ffffff"
          },
          {
            name: "description",
            content: description
          },
          {
            name: "keywords",
            content: "matthias.works, matthias, halfmann, web, design, ui, ux, frontend, development, freelancer, webdesigner, website"
          },
          
          {
            name: "og:title",
            content: title
          },
          {
            name: "og:site_name",
            content: title
          },
          {
            name: "og:description",
            content: description
          },
          {
            name: "og:image",
            content: preview
          },
          {
            name: "og:url",
            content: window.location.href
          },
          {
            name: "og:locale",
            content: "de_DE"
          },

          {
            name: "twitter:title",
            content: title
          },
          {
            name: "twitter:site_name",
            content: title
          },
          {
            name: "twitter:description",
            content: description
          },
          {
            name: "twitter:image",
            content: preview
          },
          {
            name: "twitter:url",
            content: window.location.href
          }
        ]}

        script={[
          {
            src: "https://unpkg.com/aos@next/dist/aos.js"
          }
        ]}
      />
    );
  }
}

export default SEO;
