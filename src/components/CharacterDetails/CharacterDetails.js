import React from "react";
import Particle from "../Particle";
import { Routes, Route, useParams } from "react-router-dom";
import myData from "../../Assets/data.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

function cap(string) {
	string=string.toString()
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function CharacterDetails() {
  const { name } = useParams();
  const persona = myData.persone[name];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">{name} </strong>
        </h1>
        <p style={{ color: "white" }}>
         	Ecco un piccolo prospetto sul un tuo furturo compagno d avventura
        </p>
        <Row>
          <Col md={9}>
            <Card className=" project-card-view basic-info">
              <Card.Body>
                <Card.Title>
                  <strong className="purple">Info </strong>
                </Card.Title>
                <Card.Text>
                      {Object.keys(persona.info).map((key, index) => {
                    return (
                      <Row>
                        <Col xl={3}>{<p className="purple"> {cap(key)}: </p>}</Col>
                        <Col xl={9}>{<p>{cap(persona.info[key])}</p>}</Col>
                      </Row>)
                      })}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className=" project-card-view stats">
              <Card.Body>
                <Card.Title>
                  <strong className="purple">Stats </strong>
                </Card.Title>
                <Card.Text>
                  <Row>
                    <Col xs={6}  className="purple">
                      <p> HP </p>
                      <p> MP </p>
                      <p> STR </p>
                      <p> DEX </p>
                      <p> INT </p>
                      <p> LCK </p>
                      <p> CAR </p>
                    </Col>
                    <Col xs={6}>
                      {Object.keys(persona.stats).map((key, index) => {
                        return <p>{persona.stats[key]}</p>;
                      })}
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
                  <Card.Title>
                    {" "}
                    <strong className="purple">Skills </strong>
                  </Card.Title>
                  {Object.keys(persona.skills).map((key, index) => {
                    return (
                      <Row>
                        <Col xl={5}>{<p className="purple"> {cap(key)}: </p>}</Col>
                        <Col xl={7}>{<p>{persona.skills[key]}</p>}</Col>
                      </Row>
                    );
                  })}
                </Card.Body>
              </Card>
              <Card className=" project-card-view items">
                <Card.Body>
                  <Card.Title>
										<strong className="purple">Items</strong>
									</Card.Title>
                  {Object.keys(persona.items).map((key, index) => {
                    return (
                      <Row>
                        <Col xl={3}>{<p className="purple"> {cap(key)}: </p>}</Col>
                        <Col xl={9}>{<p>{persona.items[key]}</p>}</Col>
                      </Row>
                    );
                  })}
                </Card.Body>
              </Card>
            </Col>
          </Col>
          <Col md={9}>
            <Card className=" project-card-view bio">
              <Card.Body>
                <Card.Title>
                  <strong className="purple"> Bio</strong>
                </Card.Title>
                <Card.Text> {cap(persona.bio)} </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default CharacterDetails;
