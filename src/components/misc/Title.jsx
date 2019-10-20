import React, { Component, Fragment } from "react";

import Headline from "./Headline";

class Title extends Component {
  render() {
    return (
      <Fragment>
        <h4 data-aos="fade-up">{this.props.subline}</h4>
        <Headline data-aos="fade-up" data-aos-delay="50" url={this.props.url} large={this.props.large}>{this.props.headline}</Headline>
        { this.props.content &&
          <p className="text" data-aos="fade-up" data-aos-delay="100">
            {this.props.content}
          </p>
        }
      </Fragment>
    );
  }
}

export default Title;
