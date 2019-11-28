import React, { Component } from "react";

import { ChevronLeft } from "react-feather";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";

import Link from "../../../components/misc/Link";
import Image from "../../../components/misc/Image";

import projectsData from "../../../data/projects.js";
import Headline from "../../../components/misc/Headline";

class Next extends Component {
  render() {
    return (
      <section id="next">
        <Link url={this.props.project.url}>
          <Content>
            <div className="img-wrapper">
              <Image src={this.props.project.image.preview.src} alt={this.props.project.image.preview.alt} />
            </div>
            {/* <div className="text-wrapper">
              <Container>
                <Headline>Nächstes Projekt</Headline>
              </Container>
            </div> */}
          </Content>
        </Link>
      </section>
    );
  }
}

export default Next;
