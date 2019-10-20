import React, { Component, Fragment } from "react";

import Link from "./Link";

class Button extends Component {
  render() {
    return (
      <Fragment>
        <Link className="btn" url={this.props.url}>{this.props.children}</Link>
      </Fragment>
    );
  }
}

export default Button;
