import React, { Component, Fragment } from "react";

import "../../assets/css/pages/legalpage.scss";

import SEO from "../../components/SEO";
import Navbar from "../../components/areas/Navbar";
import Footer from "../../components/areas/Footer";

import Header from "./sections/Header";
import Article from "./sections/Article";
import Contact from "../../components/areas/Contact";

import Link from "../../components/misc/Link";
import List, { ListItem } from "../../components/misc/List";

class PrivacyPolicyPage extends Component {
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
          <SEO title={"Matthias — Privacy"} />
          <Header headline="Datenschutz" />
          <Article
            headline="Allgemein"
            content={
              <p className="text">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. <br />
                Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten
                (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten
                werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.<br />
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
                Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. 
              </p>
            }
          />
          <Article
            headline="Server-Log-Files"
            content={
              <Fragment>
                <p className="text">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns
                  übermittelt. Dies sind:
                </p>
                <List className="top">
                  { [
                    "Browsertyp und Browserversion",
                    "verwendetes Betriebssystem",
                    "Referrer URL",
                    "Hostname des zugreifenden Rechners",
                    "Uhrzeit der Serveranfrage"
                  ].map((name, index) => {
                    return (
                      <ListItem>
                        <span className="text" key={index}>{name}</span>
                      </ListItem>
                    );
                  }) }
                </List>
                <p className="text top">
                  Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden. 
                </p>
              </Fragment>
            }
          />
          <Article
            headline="Cookies"
            content={
              <p className="text">
                Die Webseiten verwenden teilweise sogenannte "Cookies", die dazu dienen, Ihren Besuch angenehmer und bequemer zu gestalten.
                Cookies sind Textdateien, die temporär oder dauerhaft auf Ihrem Computer gespeichert werden und sich entweder nach Ihrem Besuch löschen oder
                für einen erneuten Besuch gespeichert bleiben.
                Sie können das Setzen von Cookies über Ihre Browsereinstellungen verhindern, jedoch könnten dadurch einige Funktionen und Angebote eingeschränkt
                werden.<br />
                Das nachträgliche Löschen von Cookies ist in der Regel immer manuell möglich. 
              </p>
            }
          />
          <Article
            headline="SSL-Verschlüsselung"
            content={
              <Fragment>
                <p className="text">
                  Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an
                  uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                  "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. 
                </p>
                <p className="text top">
                  Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden. 
                </p>
              </Fragment>
            }
          />
          <Article
            headline="Google Web Fonts"
            content={
              <p className="text">
                Zur reibungslosen Einbindung der auf diesen Webseiten verwendeten Schriftarten greifen wir auf die von Google bereitgestellten Web Fonts zurück.
                Beim Aufrufen der Webseite lädt Ihr Browser die nötigen Schriften in Ihren Browsercache.
                Google erlangt hierdurch Kenntnis über Ihre IP-Adresse. Mehr Informationen können sie unter google.com/policies/privacy.
                Die Nutzung diser Dienste erfolgt im Interesse einer einheitlichen und angenehmen Darstellung und stellt so ein berechtigtes Interesse im Sinne
                von Art. 6 Abs. 1 lit. f DSGVO dar. 
              </p>
            }
          />
          <Article
            headline="PayPal"
            content={
              <p className="text">
                Für eine bequeme, reibungslose und sichere Abwicklung bieten wir Ihnen die Zahlungsmöglichkeit "PayPal" an (PayPal (Europe)
                S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg).
                Die Übermittlung Ihrer Daten an PayPal erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO
                (Verarbeitung zur Erfüllung eines Vertrags). 
              </p>
            }
          />
          <Article
            headline="Recht auf Auskunft, Löschung, Sperrung"
            content={
              <p className="text">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. 
              </p>
            }
          />
          <Article
            headline="Änderung der Datenschutzbestimmungen"
            content={
              <Fragment>
                <p className="text">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entsprechen kann oder um
                  Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann
                  die neue Datenschutzerklärung. 
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

export default PrivacyPolicyPage;
