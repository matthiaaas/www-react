import React, { Component } from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";

class Article extends Component {
  render() {
    return (
      <article data-aos="fade-up" data-aos-delay="50">
        <Container>
          <Content>
            <h3>{this.props.headline}</h3>
            <div className="wrapper">
              {this.props.content}
            </div>
          </Content>
        </Container>
      </article>
    );
  }
}

export default Article;
