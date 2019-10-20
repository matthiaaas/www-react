import React, { Component} from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";
import Flex from "../../../components/layout/Flex";

import Title from "../../../components/misc/Title";
import Button from "../../../components/misc/Button";
import Image from "../../../components/misc/Image";

import projectsData from "../../../data/projects.js";

class Projects extends Component {
  render() {
    const firstHalf = Object.keys(projectsData).slice(0, Math.floor(Object.keys(projectsData).length / 2));
    const secondHalf = Object.keys(projectsData).slice(Math.floor(Object.keys(projectsData).length / 2), Object.keys(projectsData).length);

    return (
      <section id="projects">
        <Container>
          <Content>
            <div className="title">
              <Title
                subline="projects"
                headline="Vorgestellte Projekte"
              />
            </div>
            <div className="gallery">
              <Flex>
                <div className="row">
                  { firstHalf.map((slug) => {
                    return (
                      <div data-aos="fade-up">
                        <Image
                          className={projectsData[slug].size}
                          url={projectsData[slug].url}
                          src={projectsData[slug].image.preview.src}
                          alt={projectsData[slug].image.preview.alt}
                        />
                      </div>
                    );
                  }) }
                </div>
                <div className="row">
                  { secondHalf.map((slug) => {
                    return (
                      <div data-aos="fade-up">
                        <Image
                          className={projectsData[slug].size}
                          url={projectsData[slug].url}
                          src={projectsData[slug].image.preview.src}
                          alt={projectsData[slug].image.preview.alt}
                        />
                      </div>
                    );
                  }) }
                </div>
              </Flex>
            </div>
            <div className="go">
              <Button url="#">zum portfolio</Button>
            </div>
          </Content>
        </Container>
        <div className="bg"></div>
      </section>
    );
  }
}

export default Projects;
