import React, { Component} from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";
import Flex, { Con } from "../../../components/layout/Flex";

import Image from "../../../components/misc/Image";
import Button from "../../../components/misc/Button";
import Headline from "../../../components/misc/Headline";

import projectsData from "../../../data/projects.js";

class Hero extends Component {
  render() {
    const data = projectsData[Object.keys(projectsData)[0]];

    return (
      <section id="hero">
        <Container>
          <Content>
            <Flex aligncenter spacebetween>
              <Con flex={1} className="title">
                <Headline large data-aos="fade-up">{data.title}</Headline>
                <div data-aos="fade-up" data-aos-delay="100">
                  <Button url={data.url}>case study</Button>
                </div>
              </Con>
              <Con flex={1} className="image">
                <div data-aos="slide-left">
                  <Image
                    url={data.url}
                    src={data.image.preview.src}
                    alt={data.image.preview.alt}
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
