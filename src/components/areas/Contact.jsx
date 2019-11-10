import React, { Component, Fragment } from "react";

import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";

import Title from "../../components/misc/Title";
import Link from "../../components/misc/Link";

import linksData from "../../data/links.js";

const redirectItems = [
  { title: "hi@matthias.works", url: linksData.email },
  { title: "@teaxofficial", url: linksData.twitter }
];

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <Container>
          <Content>
            <Title
              subline="contact"
              headline="Reden wir über Ihr Projekt"
              content={
                <Fragment>
                  <Link url={linksData.email}>hi@matthias.works</Link>
                  &nbsp;-&nbsp;
                  <Link url={linksData.twitter}>@teaxofficial</Link>
                </Fragment>
              }
              url={linksData.email}
              large
            />
          </Content>
        </Container>
      </section>
    );
  }
}

export default Contact;
