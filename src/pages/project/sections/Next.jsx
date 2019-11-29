import React, { Component } from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";

import Image from "../../../components/misc/Image";

class Next extends Component {
  render() {
    return (
      <section id="next">
        <Content>
          <div className="title">
            <Container>
              <h4>nächstes projekt</h4>
            </Container>
          </div>
          <div className="image">
            <Image
              url={this.props.project.url}
              onClick={setTimeout(function() {
                window.scrollTo(0, 0);
              }, 2)}
              src={this.props.project.image.preview.src}
              alt={this.props.project.image.preview.alt}
            />
          </div>
          {/* <div className="text-wrapper">
            <Container>
              <Headline>Nächstes Projekt</Headline>
            </Container>
          </div> */}
        </Content>
      </section>
    );
  }
}

export default Next;
