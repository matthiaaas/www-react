import React, { Component, Fragment } from "react";

import Paragraph from "./modules/Paragraph";
import { SingleColumnArticle, TwoColumnArticle } from "./modules/ColumnArticle";
import ImageArticle from "./modules/ImageArticle";
import Grid, { GridItem } from "./modules/Grid";

import Headline from "../../components/misc/Headline";
import Image from "../../components/misc/Image";

import projectsData from "../../data/projects.js";

class PizziamoProject extends Component {
  render() {
    const projectData = projectsData.pizziamo;

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
          bg="default"
          head={
            <Headline data-aos="fade-up">Schwarz und schlicht</Headline>
          }
          content={
            <Fragment>
              <Paragraph data-aos="fade-up" data-aos-delay="50">Da das grobe Farbschema bereits durch die Menükarte vorgegeben war, musste kein neues Konzept erarbeitet werden.</Paragraph>
              <Paragraph top data-aos="fade-up" data-aos-delay="100">Die Website sollte die Menükarte ins Internet bringen.</Paragraph>
            </Fragment>
          }
        />
        <Grid
          bg="default"
          top={
            <Fragment>
              <Headline data-aos="fade-up">Typeface und Layout</Headline>
              <Paragraph top data-aos="fade-up" data-aos-delay="50" style={{maxWidth: "600px"}}>
                Dennoch habe ich mich für eine neue Schrift und verschiedene Farben entschieden, um die Webseite geordneter und übersichtlicher gestalten zu können.
              </Paragraph>
            </Fragment>
          }
          content={
            <Fragment>
              <GridItem flex={1}>
                <Image
                  src={projectData.image.menucard.src}
                  alt={projectData.image.menucard.alt}
                />
              </GridItem>
              <GridItem flex={1}>
                <Image
                  src={projectData.image.overview.src}
                  alt={projectData.image.overview.alt}
                />
              </GridItem>
            </Fragment>
          }
        />
        <ImageArticle
          bg="white"
          top={
            <Headline>Startseite</Headline>
          }
          content={
            <Image src={projectData.image.landing.src} />
          }
        />
        <ImageArticle
          bg="default"
          top={
            <Headline>Menükarte</Headline>
          }
          content={
            <Image src={projectData.image.menu.src} />
          }
        />
      </Fragment>
    );
  }
}

export default PizziamoProject;
