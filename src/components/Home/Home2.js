import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
 // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permettimi di introdurti alla storia della nostra <span className="purple"> compagnia </span>
            </h1>
		<p>(tratto da una serie di messaggi inviati a Laura)</p>
            <p className="home-about-body">
C'era una volta, tanto tempo fa, un piccolo regno abitato da giovani aspiranti ubriaconi che uscivano al calar della notte in cerca del loro amato "composto organico contenente il gruppo funzionale -OH"<br />
Oh e c'era un <b className="purple">castellooo</b>!<br />
	  <hr/>
 Un giorno però questa felice compagnia chiamata <b className="purple">"Asociali Riuniti"</b> incontro una strega malvagia a rovinare i giochi, la chiameremo Laura 😌<br />
 Laura <b className="purple">Lanoia</b>!<br />
 questa strega malvagia e molto molto antipatica, Laura se ti sei dimenticata il nome, lancio una maledizione sulla compagnia!!!<br />
 Laura, quella brutta cattiva, separo i nostri avventurieri!!! 😱<br />
 sempre meno persone avevano il coraggio di avventurarsi fuori di notte 😱<br />
	  <hr/>
 la compagnia non demorse e per combattere la strega Laura brutta, cattiva e puzzona ideò un piano geniale!<br />
 creare una nuova compagniaaaa!!! più forte più unità!!!<br />
 alcuni membri deboli però dovettero sacrificarsi 😔<br />
 ma dalle ceneri di questi martiri nacque la nuova e potente Fellowship Startup!!!! 💓💓💓🔝🎼🤽‍♀️🤼‍♂️<br />
 ma la nuova compagnia non poteva rischiare di perdere di nuovo contro la strega Laura!<br />
 brutta e cattiva!<br />
 e per questo decise di eleggere tre capitribu con il compito di mantenere l'ordine e l'armonia all'interno del branco!<br />
 Il Cavaliere Nero, il possente Tony!!!!<br />
 Il Saggio Scriba, l'intelligente Pier!!!<br />
 e carogna..<br />
 questi tre capitani, accompagnati dal loro super affascinate, aitante e a quanto si dice superdotato consigliere, BONNY! decisero di stilare un regolarmento (che forse riesco a recuperare 🤔)
 pian piano la compagnia crebbe e riuscì a sconfiggere la cattiva strega Laura, nemmeno con il suo fedele falco Seto (il contrario di coniglio lina 😂) riuscì a resistere e per ora è sigillata in attesa di vendetta! 😔
<br />
 ~the end ~
      
</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
