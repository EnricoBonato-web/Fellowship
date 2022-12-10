import React from 'react';
import Particle from '../Particle';
import { Routes, Route, useParams } from 'react-router-dom';
import myData from '../../Assets/data.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';
import { Link } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function CharacterDetails() {
	const {name} = useParams();
	const persona=myData.persone[name];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">{name} </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects Ive worked on recently.</p>
	    <Row>
			<Col md={3}>
	  	  		<Card className=" project-card-view photo">
				  <Card.Body>
				  </Card.Body>
				    </Card>
				</Col>
			<Col md={6}>
				<Card className=" project-card-view basic-info">
			      <Card.Body>
				  	<Card.Text>
	     	 			<Row>
		  					<Col md={3}>
								{
									 Object.keys(persona.info).map((key, index) =>{ return <p> {key}: </p> })
								}
		  					</Col>
		  					<Col md={9}>
								{
									 Object.keys(persona.info).map((key, index) =>{ return <p>{persona.info[key]}</p> })
								}
		  					</Col>
	      				</Row>
	 	 			</Card.Text>
			      </Card.Body>
			    </Card>
			</Col>
			<Col md={3}>
				<Card className=" project-card-view stats">
			      <Card.Body>
				  	<Card.Text>
	     	 			<Row>
		  					<Col md={6}>
								<p> HP </p>
								<p> MP </p>
								<p> STR </p>
								<p> DEX </p>
								<p> INT </p>
								<p> LCK </p>
								<p> CAR </p>
		  					</Col>
		  					<Col md={6}>
								{
									 Object.keys(persona.stats).map((key, index) =>{ return <p>{persona.stats[key]}</p> })
								}
		  					</Col>
	      				</Row>

				  	</Card.Text>
			      </Card.Body>
			    </Card>
			</Col>
		</Row>
	  
	  
	  
	  
	  
	    <Row>
			<Col md={3}>

				<Col>
	  	  			<Card className=" project-card-view skills">
					  <Card.Body>
					  <Card.Title>Skills</Card.Title>
					  </Card.Body>
					</Card>

		  	  		<Card className=" project-card-view items">
					  <Card.Body>
					  <Card.Title>Items</Card.Title>
					  </Card.Body>
					</Card>
				</Col>
			</Col>
			<Col md={9}>
				<Card className=" project-card-view bio">
			      <Card.Body>
			        <Card.Text> {persona.bio} </Card.Text>
			      </Card.Body>
			    </Card>
			</Col>
		</Row>

      </Container>
    </Container>
  );
}
export default CharacterDetails;
