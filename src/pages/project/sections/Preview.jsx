import React, { Component } from "react";

import Content from "../../../components/layout/Content";

import Image from "../../../components/misc/Image";

class Preview extends Component {
  render() {
    return (
      <section id="preview">
        <Content>
          <div data-aos="fade-in">
            <Image src={this.props.src}></Image>
          </div>
        </Content>
      </section>
    );
  }
}

export default Preview;
