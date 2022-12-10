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
          My Recent <strong className="purple">{productId} </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects Ive worked on recently.</p>
	  	<GetRepoData/>
      </Container>
    </Container>
  );
}
export default OnorableMensions;
