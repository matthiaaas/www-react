import React, { Component, Fragment } from "react";

import Paragraph from "./modules/Paragraph";
import Headline from "../../components/misc/Headline";
import TwoColumnArticle from "./modules/TwoColumnArticle";

class NoeltnerProject extends Component {
  render() {
    return (
      <Fragment>
        <TwoColumnArticle
          bg="white"
          head={
            <Headline data-aos="fade-up">Das Handwerk macht den feinen Unterschied</Headline>
          }
          content={
            <Fragment>
              <Paragraph data-aos="fade-up" data-aos-delay="50">Die Goldschmiede Nöltner möchte sich in ihrer Arbeitsweise von der Vielzahl an industriell fertigenden Firmen unterscheiden.</Paragraph>
              <Paragraph top data-aos="fade-up" data-aos-delay="100">Sie bietet zahlreiche in traditioneller Handarbeit gefertigte Unikate an und entwickelt zusammen mit Ihren Kunden aussagekräftige Schmuckstücke.</Paragraph>
              <Paragraph top data-aos="fade-up" data-aos-delay="150">Die Indivitualität steht dabei immer im Vordergrund.</Paragraph>
            </Fragment>
          }
        />
      </Fragment>
    );
  }
}

export default NoeltnerProject;
