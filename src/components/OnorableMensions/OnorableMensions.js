import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import { GetRepoData } from './GetRepoData';
import {useParams} from "react-router-dom";
function OnorableMensions() {
const {productId} = useParams()
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Menzioni Onorevoli
        </h1>
        <p style={{ color: 'white' }}>A volte il passato ritorna, a volte rimane sopito.. in ogni caso sempre meglio essere pronti</p>
		<p style={{ color: 'white' }}>(alcuni membri del passato o persone degne di nota)</p>
	  	<GetRepoData/>
      </Container>
    </Container>
  );
}
export default OnorableMensions;
