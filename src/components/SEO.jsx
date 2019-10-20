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
