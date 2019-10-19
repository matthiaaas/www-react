import React, { Component, Fragment } from "react";

class Headline extends Component {
  render() {
    return (
      <Fragment>
        <a href={this.props.url}>
          { this.props.large ? <h1 {...this.props}>{this.props.children}</h1> : <h2 {...this.props}>{this.props.children}</h2> }
        </a>
      </Fragment>
    );
  }
}

export default Headline;
