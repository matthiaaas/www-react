import React, { Component, Fragment } from "react";

import Link from "./Link";

class Image extends Component {
  render() {
    return (
      <Fragment>
        { this.props.url ?
        <Link url={this.props.url} className={this.props.className}>
          <img src={this.props.src} alt={this.props.alt}></img>
        </Link> : <img src={this.props.src} alt={this.props.alt}></img>
        }
      </Fragment>
    );
  }
}

export default Image;
