import React, { Component } from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";

import Headline from "../../../components/misc/Headline";
import Link from "../../../components/misc/Link";

import { ChevronLeft } from "react-feather";

class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <Content>
            <Headline data-aos="fade-up" large>{this.props.headline}</Headline>
            <div data-aos="fade-up" data-aos-delay="50">
              <Link url="/" className="goback"><ChevronLeft /> Zurück</Link>
            </div>
          </Content>
        </Container>
      </header>
    );
  }
}

export default Header;
