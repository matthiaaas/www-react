import React, { Component} from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";
import Flex from "../../../components/layout/Flex";

import Title from "../../../components/misc/Title";
import Button from "../../../components/misc/Button";

import projectsData from "../../../data/projects.js";

class Projects extends Component {
  render() {
    const firstHalf = Object.keys(projectsData).slice(0, Math.floor(Object.keys(projectsData).length / 2));
    const secondHalf = Object.keys(projectsData).slice(Math.floor(Object.keys(projectsData).length / 2), Object.keys(projectsData).length);

    console.log(projectsData[firstHalf[1]]);

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
                      <div>
                        <a className={projectsData[slug].size} data-size={projectsData[slug].size} href={projectsData[slug].url}>
                          <img src={projectsData[slug].preview.src} alt={projectsData[slug].preview.alt} />
                        </a>
                      </div>
                    );
                  }) }
                </div>
                <div className="row">
                  { secondHalf.map((slug) => {
                    return (
                      <div>
                        <a className={projectsData[slug].size} data-size={projectsData[slug].size} href={projectsData[slug].url}>
                          <img src={projectsData[slug].preview.src} alt={projectsData[slug].preview.alt} />
                        </a>
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
