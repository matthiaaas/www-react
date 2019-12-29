import React, { Component, Fragment } from "react";

import Paragraph from "./modules/Paragraph";
import { SingleColumnArticle } from "./modules/ColumnArticle";

import Headline from "../../components/misc/Headline";

class FTPClientProject extends Component {
  render() {
    return (
      <Fragment>
         <SingleColumnArticle
          bg="white"
          content={
            <Fragment>
              <Headline data-aos="fade-up" large>Ein Web-App Konzept für Rezepte mit Fokus auf vielfältige Ernährungstypen</Headline>
              <Paragraph data-aos="fade-up" data-aos-delay="50" top>Dieses Konzept wurde nie ausgearbeitet oder umgesetzt</Paragraph>
            </Fragment>
          }
        />
      </Fragment>
    );
  }y
}

export default FTPClientProject;
