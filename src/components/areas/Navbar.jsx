import React, { Component } from "react";

import { createBrowserHistory } from "history";

import Container from "../layout/Container";
import Content from "../layout/Content";
import Flex from "../layout/Flex";

import List, { ListItem } from "../misc/List";
import Link from "../misc/Link";

import { Menu, X } from "react-feather";

import settingsData from "../../data/settings.js";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: settingsData.basename+"/#about" },
  { title: "Projects", link: settingsData.basename+"/#projects" },
  { title: "Contact", link: settingsData.basename+"/#contact" }
];

class Navbar extends Component {
  history = createBrowserHistory();

  constructor() {
    super();

    this.state = {
      navOpened: false,
      onMobile: false,
      active: window.location.pathname === settingsData.basename ? menuItems[0].title : ""
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

  handleClick(menuItem) {
    this.setState({
      active: menuItem.title
    });

    this.closeNav();
  }

  openNav() {
    this.setState({
      navOpened: true,
      onMobile: true
    });
  }

  closeNav() {
    if (this.state.navOpened) {
      this.setState({
        navOpened: false
      });
    }
  }

  componentDidMount() {
    this.unlisten = this.history.listen(({pathname}) => {
      console.log("LISTENED")
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const activeElementClass = "active";

    return (
      <nav>
        <Container>
          <Content>
            <Flex aligncenter spacebetween>
              { !this.state.navOpened && <Menu className="mobile m-open" onClick={this.openNav} /> }
              { this.state.navOpened && <X className="mobile m-close" onClick={this.closeNav} /> }
              <List className={this.state.onMobile ? "navigation on-mobile" : "navigation"} style={this.state.navOpened ? this.navStyle.opened : {}}>
                { menuItems.map((menuItem, index) => {
                  return (
                    <ListItem key={index}>
                      <Link
                        key={index}
                        url={menuItem.link}
                        className={this.state.active === menuItem.title ? activeElementClass : {}}
                        onClick={this.handleClick.bind(this, menuItem)}
                      >
                        {menuItem.title}
                      </Link>
                    </ListItem>
                  );
                }) }
              </List>
            </Flex>
          </Content>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
