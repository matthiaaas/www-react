import React, { Component } from "react";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";
import Flex from "../../../components/layout/Flex";

class Grid extends Component {
  render() {
    return (
      <section className={"grid "+this.props.white}>
        <Container>
          <Content>
            <Flex>
              
            </Flex>
          </Content>
        </Container>
      </section>
    );
  }
}

export default Grid;
