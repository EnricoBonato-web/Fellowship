import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/home-main.svg';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 className="heading-name">
                Benvenuta 
                <strong className="main-name"> Angela </strong>
	  						all'inizio della tua avventura. 
              </h1>
              <h2 className="heading-name">
Questo piccolo sito web ti portera alla scoperta della compagnia migliore di Casteo
              </h2>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <h2>Piena di gente: </h2> <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
