import React, { Component} from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";
import Flex, { Con } from "../../../components/layout/Flex";

import Image from "../../../components/misc/Image";
import Button from "../../../components/misc/Button";
import Headline from "../../../components/misc/Headline";

class Hero extends Component {
  render() {
    return (
      <section id="hero">
        <Container>
          <Content>
            <Flex aligncenter spacebetween>
              <Con flex={1} className="title">
                <Headline large data-aos="fade-up">Goldschmiede Karl Nöltner</Headline>
                <div data-aos="fade-up" data-aos-delay="100">
                  <Button url="/project/noeltner">case study</Button>
                </div>
              </Con>
              <Con flex={1} className="image">
                <div data-aos="slide-left">
                  <Image
                    url="/project/noeltner"
                    src="https://cdn.dribbble.com/users/1043407/screenshots/4209431/generalimage_01.png"
                    alt="project preview"
                  />
                </div>
              </Con>
            </Flex>
          </Content>
        </Container>
        <div className="bg"></div>
      </section>
    );
  }
}

export default Hero;
