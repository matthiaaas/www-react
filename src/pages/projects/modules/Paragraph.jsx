import React, { Component } from "react";

class Paragraph extends Component {
  render() {
    return (
      <p className={this.props.top ? "text top" : "text"} {...this.props}>
        {this.props.children}
      </p>
    );
  }
}

export default Paragraph;
