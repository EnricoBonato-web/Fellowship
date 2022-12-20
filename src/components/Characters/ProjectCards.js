import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';
import { Link } from "react-router-dom";

function cFL(string) {
	if (string)
  	return string.charAt(0).toUpperCase() + string.slice(1);
	
}
function ProjectCards(props) {
  // let img = props.imgPath.toLocaleLowerCase();
  // const immagine = React.createElement(icons[img], {
  //   style: { height: '100px', margin: '10px' },
  //   className: 'card-img',
  // });
      // {immagine}
  return (
    <Card className="project-card-view">

      <Card.Body>
	  <Card.Title style={{ "fontSize": 30 }} >{cFL(props.nome)}</Card.Title>
		<Card.Title>{cFL(props.titolo)}</Card.Title>
		<Card.Text style={{ textAlign: 'justify' }}>{cFL(props.description)}</Card.Text>
        <Button variant="primary" >
          <Link to={`/charactersDetails/${props.nome}`} >{props.nome}<BiLinkExternal /> &nbsp;</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
