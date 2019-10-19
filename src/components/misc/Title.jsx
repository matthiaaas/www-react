import React, { Component, Fragment } from "react";

import Headline from "./Headline";

class Title extends Component {
  render() {
    return (
      <Fragment>
        <h4>{this.props.subline}</h4>
        <Headline url={this.props.url} large={this.props.large}>{this.props.headline}</Headline>
        { this.props.content &&
          <p className="text">
            {this.props.content}
          </p>
        }
      </Fragment>
    );
  }
}

export default Title;
