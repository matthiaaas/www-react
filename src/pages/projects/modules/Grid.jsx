import React, { Component } from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";
import Flex, { Con } from "../../../components/layout/Flex";

export class GridItem extends Component {
  render() {
    return (
      <Con className="grid-item" flex={this.props.flex}>
        {this.props.children}
      </Con>
    );
  }
}

class Grid extends Component {
  render() {
    return (
      <section className={"grid "+this.props.bg}>
        <Container>
          <Content>
            { this.props.top && <div className="top-wrapper">
                {this.props.top}
              </div>
            }
            <Flex>
              {this.props.content}
            </Flex>
          </Content>
        </Container>
      </section>
    );
  }
}

export default Grid;
