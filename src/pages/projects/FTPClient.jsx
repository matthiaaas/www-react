import React, { Component, Fragment } from "react";

import Paragraph from "./modules/Paragraph";
import { SingleColumnArticle, TwoColumnArticle } from "./modules/ColumnArticle";
import ImageArticle from "./modules/ImageArticle";
import Grid, { GridItem } from "./modules/Grid";

import Headline from "../../components/misc/Headline";
import Image from "../../components/misc/Image";

import projectsData from "../../data/projects.js";

class FTPClientProject extends Component {
  render() {
    const projectData = projectsData.ftpclient;

    return (
      <Fragment>
        <TwoColumnArticle
          bg="white"
          head={
            <Headline data-aos="fade-up">All-in-one: Schluss mit externem Putty, Filezilla und Co.</Headline>
          }
          content={
            <Fragment>
              <Paragraph data-aos="fade-up" data-aos-delay="50">FTP Applikationen gehören zu den essenziellsten Tools für Entwickler.</Paragraph>
              <Paragraph top data-aos="fade-up" data-aos-delay="100">Das Projekt "FTP Client" ist ein Konzept mit dem Ziel, unmodernen und oftmals unübersichtlichen FTP Desktop Apps einen neuen Anstrich zu verpassen.</Paragraph>
              <Paragraph top data-aos="fade-up" data-aos-delay="150">Neben standardmäßig integrierter Shell und einem Datei-Manager gibt es zudem einen Tab mit ausführlichen Live-Statistiken zur aktuellen Sitzung.</Paragraph>
            </Fragment>
          }
        />
        <ImageArticle
          bg="default"
          top={
            <Headline>Live Statistiken</Headline>
          }
          content={
            <Image src={projectData.image.stats.src} />
          }
        />
        <ImageArticle
          bg="white"
          top={
            <Headline>Terminal</Headline>
          }
          content={
            <Image src={projectData.image.terminal.src} />
          }
        />
        <ImageArticle
          bg="default"
          top={
            <Headline>Datei-Manager</Headline>
          }
          content={
            <Image src={projectData.image.filemanager.src} />
          }
        />
      </Fragment>
    );
  }
}

export default FTPClientProject;
