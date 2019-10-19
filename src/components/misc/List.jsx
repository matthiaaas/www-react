import React, { Component } from "react";

import Link from "./Link";

class List extends Component {
  render() {
    return (
      <ul {...this.props}>
        {this.props.children}
      </ul>
    );
  }
}

export default List;

export class ListItem extends Component {
  render() {
    return (
      <li {...this.props}>
        { this.props.url ? <Link url={this.props.url} {...this.props}>{this.props.children}</Link> : this.props.children }
      </li>
    );
  }
}
