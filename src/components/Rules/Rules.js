import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import { GetRepoData } from './GetRepoData';
import {useParams} from "react-router-dom";
function Rules() {
const {productId} = useParams()
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Regolamento Ufficiale
        </h1>
        <p style={{ color: 'white' }}>17 settembre 2017, Fellowship startup. </p>
        <p style={{ color: 'white' }}> Il regnante Tony decreta: </p>
	  	<GetRepoData/>
      </Container>
    </Container>
  );
}
export default Rules;
