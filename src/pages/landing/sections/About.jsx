import React, { Component} from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";

import Title from "../../../components/misc/Title";

class About extends Component {
  render() {
    return (
      <section id="about">
        <Container>
          <Content>
            <Title
              subline="about"
              headline="Hallo"
              content="Meine Name ist Matthias, ich bin 15 und Webdesigner sowie Frontend-Entwickler aus Deutschland"
            />
          </Content>
        </Container>
      </section>
    );
  }
}

export default About;
