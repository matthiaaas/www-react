import React, { Component, Fragment } from "react";

import Paragraph from "./modules/Paragraph";
import Headline from "../../components/misc/Headline";
import { SingleColumnArticle, TwoColumnArticle } from "./modules/ColumnArticle";

class PizziamoProject extends Component {
  render() {
    return (
      <Fragment>
        <SingleColumnArticle
          bg="white"
          content={
            <Fragment>
              <Headline data-aos="fade-up" large>Die Pizzeria Pizziamo ist bekannt für ihre übergroßen, leckeren Pizzen. Schon seit Januar 2019 besteht sie in der Eisenbahnstraße.</Headline>
            </Fragment>
          }
        />
        <TwoColumnArticle
          bg="none"
          head={
            <Headline data-aos="fade-up">Schwarz und schlicht</Headline>
          }
          content={
            <Fragment>
              <Paragraph data-aos="fade-up" data-aos-delay="50">Da das grobe Farbschema bereits durch die Menükarte vorgegeben war, musste kein neues Konzept erarbeitet werden.</Paragraph>
              <Paragraph top data-aos="fade-up" data-aos-delay="100">Die Website sollte eine online Menükarte werden.</Paragraph>
            </Fragment>
          }
        />
        <TwoColumnArticle
          bg="none"
        />
      </Fragment>
    );
  }
}

export default PizziamoProject;
