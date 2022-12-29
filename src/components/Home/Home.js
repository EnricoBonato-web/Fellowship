import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/home-main.svg';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';

import Card from "react-bootstrap/Card";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="footer-copywright">
            <Col className="home-header">
              <h1 className="heading-name">
                Benvenuta 
                <strong className="main-name"> Angela </strong>
	  						all inizio della tua avventura!
              </h1>
		<br/>
              <h3 >
Questo piccolo sito web ti portera alla scoperta della compagnia migliore di Casteo
              </h3>

              <div className="footer-copywright" style={{ padding: 50, textAlign: 'left' }}>
                <h2>Piena di gente: </h2> <Type />
              </div>
            </Col>
          </Row>
          <h2 className="heading-name footer-copywright"> Di fronte a te si parano 5 possibili strade: </h2>
          <Row>
		
		<Col md={4}>
					<Card className=" project-card-view basic-info">
					  <Card.Body>
					    <Card.Text>
							Prosegui per questa strada e ti raccontero l'origine della compagnia
					    </Card.Text>
					  </Card.Body>
					</Card>
		</Col>
		<Col md={4}>
					<Card className=" project-card-view basic-info">
					  <Card.Body>
					    <Card.Text>
		Utilizzando il menu potrai scoprire tutte le informazioni rigurdo le persone piu simpatiche di casteo e dintorni.
					    </Card.Text>
					  </Card.Body>
					</Card>
		</Col>
		<Col md={4}>
					<Card className=" project-card-view basic-info">
					  <Card.Body>
					    <Card.Text>
		Nel caso tu non sappia cosa sia Casteo e dintorni ti abbiamo fornito una mappa con tutti i luoghi piu importanti.
					    </Card.Text>
					  </Card.Body>
					</Card>
		</Col>
          </Row>
		<Row>
		<Col md={4}>
					<Card className=" project-card-view basic-info">
					  <Card.Body>
					    <Card.Text>
		Viaggiando e esplorando questi luoghi potresti imbatterti in svariati nemici pericolosi, ricordati di studiare bene anche loro nella sezione menzioni onorevoli
					    </Card.Text>
					  </Card.Body>
					</Card>
		</Col>
		<Col md={4}>
					<Card className=" project-card-view basic-info">
					  <Card.Body>
					    <Card.Text>
		7 sono le leggi da rispettare.. ricordale tutte; la tua vita potrebbe dipendere da questo
					    </Card.Text>
					  </Card.Body>
					</Card>
		</Col>
          </Row>
    
		    </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
