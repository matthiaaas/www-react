import React, { Component } from "react";

import Container from "../layout/Container";
import Content from "../layout/Content";
import Flex from "../layout/Flex";

const menuItems = [
  { title: "Home", link: "/#hero" },
  { title: "About", link: "/#about" },
  { title: "Projects", link: "/#projects" },
  { title: "Contact", link: "/#contact" }
];

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      navOpened: false,
      active: menuItems[0].title
    }

    this.navStyle = {
      opened: {
        height: "auto",
        padding: "20vh 0"
      },
      closed: {
        height: "0",
        padding: "0"
      }
    }

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  handleClick = (menuItem) => {
    this.setState({
      active: menuItem.title
    });
  }

  openNav() {
    this.setState({
      navOpened: true
    });
  }

  closeNav() {
    this.setState({
      navOpened: this.state.navOpened ? false: true
    });
  }

  render() {

    const activeElementClass = "active";

    return (
      <nav>
        <Container>
          <Content>
            <Flex aligncenter spacebetween>
              { !this.state.navOpened && <i className="mobile m-open" data-feather="menu" onClick={this.openNav}></i> }
              { this.state.navOpened && <i className="mobile m-close" data-feather="x" onClick={this.closeNav}></i> }
              <ul className="navigation" style={this.state.navOpened ? this.navStyle.opened: {}}>
                { menuItems.map(menuItem => (
                  <li>
                    <a
                      href={menuItem.link}
                      className={this.state.active === menuItem.title ? activeElementClass : {}}
                      onClick={this.handleClick.bind(this, menuItem)}
                    >
                      {menuItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Flex>
          </Content>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
