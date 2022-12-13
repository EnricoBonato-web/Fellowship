import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import { GetRepoData } from './GetRepoData';
function Characters() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Membri attuali del  <strong className="purple">Party </strong>
        </h1>
        <p style={{ color: 'white' }}>Studia con attenzione.</p>
	  	<GetRepoData/>
      </Container>
    </Container>
  );
}
export default Characters;
