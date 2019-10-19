import React, { Component } from "react";
import Helmet from "react-helmet";

class SEO extends Component {
  render() {
    const defaultTitle = "Matthias — Freelance Webdesigner and Frontend Developer";

    const title = this.props.title || defaultTitle;

    return (
      <Helmet
        defaultTitle={defaultTitle}
        title={title}
      />
    );
  }
}

export default SEO;
