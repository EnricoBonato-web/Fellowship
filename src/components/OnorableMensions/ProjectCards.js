import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';

function capitalizeFirstLetter(string) {
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
	  <Card.Title style={{ "fontSize": 30 }} >{capitalizeFirstLetter(props.nome)}</Card.Title>
        <Card.Title>{props.titolo}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>
        <Button variant="primary" href={`/charactersDetails/${props.nome}`} target="_blank">
          {props.nome}<BiLinkExternal /> &nbsp;
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
