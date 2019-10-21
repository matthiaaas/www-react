import React, { Component } from "react";

import "../../assets/css/pages/errorpage.scss";

import SEO from "../../components/SEO";
import Contact from "../../components/areas/Contact";

import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";

import Headline from "../../components/misc/Headline";
import Button from "../../components/misc/Button";

class PageNotFound extends Component {
  render() {
    return (
      <main id="error">
        <SEO title="404" description="Seite nicht gefunden"></SEO>
        <header>
          <Container>
            <Content>
              <Headline large>Seite nicht gefunden</Headline>
              <Button url="/">zurück</Button>
            </Content>
          </Container>
        </header>
        <Contact></Contact>
      </main>
    );
  }
}

export default PageNotFound;
