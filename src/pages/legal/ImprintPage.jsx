import React, { Component, Fragment } from "react";

import "../../assets/css/pages/legalpage.scss";

import SEO from "../../components/SEO";
import Navbar from "../../components/areas/Navbar";
import Footer from "../../components/areas/Footer";

import Header from "./sections/Header";
import Article from "./sections/Article";
import Contact from "../../components/areas/Contact";

import Link from "../../components/misc/Link";

import linksData from "../../data/links.js";

class ImprintPage extends Component {
  componentDidMount() {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 2);
  }
  
  render() {
    return (
      <Fragment>
        <Navbar />
        <main id="legal">
          <SEO title={"Matthias — Imprint"} />
          <Header headline="Impressum" />
          <Article
            headline="Angaben gemäß §5 TMG"
            content={
              <Fragment>
                <span className="text">Matthias Halfmann</span>
                <span className="text">Merkelbuckel 29</span>
                <span className="text">77815 Bühl, Deutschland</span>
                <span className="text">Missbrauch untersagt</span>
                
                <span className="text top">Gültig für folgende Seiten: <Link url="https://matthias.works">matthias.works</Link>, <Link url="https://space.matthias.works">space.matthias.works</Link></span>
              </Fragment>
            }
          />
          <Article
            headline="Kontakt"
            content={
              <Fragment>
                <span className="text">E-Mail: <Link url={linksData.email}>{linksData.email.replace("mailto:", "")}</Link></span>
                <span className="text">Discord: matthias#9042</span>
                <span className="text">Twitter: <Link url={linksData.twitter}>{linksData.twitter.replace("https://twitter.com/", "@")}</Link></span>
              </Fragment>
            }
          />
          <Article
            headline="Verantwortlich für Inhalt"
            content={
              <Fragment>
                <span className="text">Matthias Halfmann</span>
                <span className="text">s. oben</span>
              </Fragment>
            }
          />
          <Article
            headline="Haftung für Inhalte"
            content={
              <p className="text">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
                Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            }
          />
          <Article
            headline="Haftung für Links"
            content={
              <Fragment>
                <p className="text">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                  fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                  der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                  Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="text top">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </Fragment>
            }
          />
          <Article
            headline="Urheberrecht"
            content={
              <Fragment>
                <p className="text">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                  Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                  jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="text top">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
                  Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                  entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
                <span className="text top">Quelle: <Link url="https://e-recht24.de">e-recht24.de</Link></span>
              </Fragment>
            }
          />
          <Contact />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default ImprintPage;
