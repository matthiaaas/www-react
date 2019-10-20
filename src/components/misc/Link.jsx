import React, { Component } from "react";
import { Link } from "react-router-dom";
import isExternal from "is-url-external";

class CustomLink extends Component {
  render() {
    if (this.props.url.startsWith("#") || this.props.url.startsWith("/#") || isExternal(this.props.url) || this.props.url.startsWith("mailto:")) {
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
