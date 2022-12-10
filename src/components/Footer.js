import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Template by Soumyajit Behera
            <br /> implemented by Enrico Bonato
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} EB</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;