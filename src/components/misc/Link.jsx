import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <a href={this.props.url} {...this.props}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;
