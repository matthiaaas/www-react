import React, { Component } from "react";

import { ChevronLeft } from "react-feather";

import Container from "../../../components/layout/Container";
import Content from "../../../components/layout/Content";
import Flex, { Con } from "../../../components/layout/Flex";

import Link from "../../../components/misc/Link";

class Overview extends Component {
  render() {
    return (
      <section id="overview">
        <Container>
          <Content>
            <Flex aligncenter spacebetween>
              <Con>
                <Link url="/" className="goback"><ChevronLeft /> Zurück</Link>
              </Con>
              <Con>
                <h3>Client</h3>
                <span className="text">{this.props.client}</span>
              </Con>
              <Con>
                <h3>Demo</h3>
                <span className="text">
                  { this.props.demo.text === "-" ? "-" :
                    <Link url={this.props.demo.url} className="govisit">{this.props.demo.text}</Link>
                  }
                </span>
              </Con>
              <Con>
                <h3>Skills</h3>
                <ul>
                  { this.props.skills.map((skill, index) => {
                    return <li className="text" key={index}>{skill}</li>;
                  }) }
                </ul>
              </Con>
            </Flex>
          </Content>
        </Container>
      </section>
    );
  }
}

export default Overview;
