import React, { Component} from "react";

import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Flex, { Con } from "../../components/layout/Flex";

import List, { ListItem } from "../../components/misc/List";

import linksData from "../../data/links.js";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Content>
            <Flex spacebetween>
              <Con flex={2} className="details">
                <h3>Matthias Halfmann</h3>
                <span className="text">
                  15-jähriger audodidaktischer Webdesigner und Frontend-Entwickler aus Deutschland.
                </span>
              </Con>
              <List className="con con1">
                <h3>Legal</h3>
                <ListItem url="/imprint">Impressum</ListItem>
                <ListItem url="/privacy">Datenschutz</ListItem>
              </List>
              <List className="con con1">
                <h3>Kontakt</h3>
                <ListItem url={linksData.email}>E-Mail</ListItem>
                <ListItem url={linksData.twitter}>Twitter</ListItem>
                <ListItem url={linksData.phone}>Phone</ListItem>
              </List>
              <List className="con con1">
                <h3>Social</h3>
                <ListItem url={linksData.dribbble}>Dribbble</ListItem>
                <ListItem url={linksData.behance}>Behance</ListItem>
                <ListItem url={linksData.github}>Github</ListItem>
                <ListItem url={linksData.twitter}>Twitter</ListItem>
              </List>
              <List className="con con1">
                <h3>Projekte</h3>
                <ListItem url="/project/noeltner">Goldschmiede Nöltner</ListItem>
                <ListItem url="/project/pizziamo">Pizziamo</ListItem>
              </List>
            </Flex>
            <div className="bar">
              <Flex aligncenter spacebetween>
                <span className="copyright-notice text">&copy; Matthias — { new Date().getFullYear() }</span>
                <span className="text">matthias.works</span>
              </Flex>
            </div>
          </Content>
        </Container>
      </footer>
    );
  }
}

export default Footer;
