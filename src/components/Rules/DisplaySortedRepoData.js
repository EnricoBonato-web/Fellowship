import React from 'react';
import { Col } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import {  Row } from 'react-bootstrap';
//https://github.com/KaleidosCodeTeam/SWEDesigner-source
function DisplaySortedRepoData({ data, num }) {
  const text = (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      {	Object.keys(data.regole).map((key, index) => {
        return (
          <Col md={4} className="project-card" key={key}>
            <ProjectCards
              key={key}
              nome={key}
              titolo={data.regole[key].titolo}
              description={data.regole[key].bio}
            >
			</ProjectCards>
          </Col>
        );
      })}
    </Row>
  );

  return text;
}
export default DisplaySortedRepoData;
