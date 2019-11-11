import React, { Component } from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";
import Flex, { Con } from "../../../components/layout/Flex";

export class SingleColumnArticle extends Component {
  render() {
    return (
      <section className={"grid "+this.props.bg}>
        <Container>
          <Content>
            {this.props.content}
          </Content>
        </Container>
      </section>
    );
  }
}

export class TwoColumnArticle extends Component {
  render() {
    return (
      <section className={"grid "+this.props.bg}>
        <Container>
          <Content>
            <Flex>
              <Con flex={3} className="headline">
                {this.props.head}
              </Con>
              <Con flex={3}>
                {this.props.content}
              </Con>
              <Con flex={2} className="placeholder"></Con>
            </Flex>
          </Content>
        </Container>
      </section>
    );
  }
}
