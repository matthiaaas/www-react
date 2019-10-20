import React, { Component } from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";

import Headline from "../../../components/misc/Headline";

class Header extends Component {
  render() {
    return (
      <header id="teaser">
        <Container>
          <Content>
            <Headline large data-aos="fade-up">{this.props.content}</Headline>
          </Content>
        </Container>
      </header>
    );
  }
}

export default Header;
