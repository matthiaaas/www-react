import React, { Component } from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";

class ImageArticle extends Component {
  render() {
    return (
      <section className={"image " + this.props.bg + (this.props.fullscreen && " fullscreen")}>
        { this.props.top && <div className="top-wrapper">
          <Container>
            <Content>
              {this.props.top}
            </Content>
          </Container>
        </div>
        }
        <div className="image-wrapper">
          { this.props.fullscreen ?
            <Content>
              {this.props.content}
            </Content> : 
            <Container>
              <Content>
                {this.props.content}
              </Content>
            </Container>
          }
        </div>
      </section>
    );
  }
}

export default ImageArticle;
