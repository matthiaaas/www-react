import React, { Component, Fragment } from "react";

class Image extends Component {
  render() {
    return (
      <Fragment>
        <a href={this.props.url}>
          <img src={this.props.src} alt={this.props.alt}></img>
        </a>
      </Fragment>
    );
  }
}

export default Image;
