import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import { GetRepoData } from './GetRepoData';
import {useParams} from "react-router-dom";
function Places() {
const {productId} = useParams()
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Luoghi del cuore
        </h1>
        <p style={{ color: 'white' }}>La nostra avventura ci ha portato a esplorare la vasta landa del veneto con qualche quest a diversi giorni di cammino di distanza</p>
				<p style={{ color: 'white' }}>Di seguito alcuni dei piu degni di nota</p>
	  	<GetRepoData/>
      </Container>
    </Container>
  );
}
export default Places;
