import React, { Component } from "react";
import { Link } from "react-router-dom";

import isExternal from "is-url-external";

import { hasHash } from "../../utils/utils.js";

class CustomLink extends Component {
  render() {
    if (isExternal(this.props.url) || this.props.url.startsWith("mailto:") || hasHash(this.props.url)) {
      console.log(this.props.url);
      return (
        <a href={this.props.url} {...this.props}>
          {this.props.children}
        </a>
      );
    } else {
      return (
        <Link to={this.props.url} {...this.props}>
          {this.props.children}
        </Link>
      );
    }
  }
}

export default CustomLink;
