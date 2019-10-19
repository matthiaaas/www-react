import React, { Component, Fragment } from "react";

class Button extends Component {
  render() {
    return (
      <Fragment>
        <a className="btn" href={this.props.url}>{this.props.children}</a>
      </Fragment>
    );
  }
}

export default Button;
