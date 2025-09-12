'use client';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Star from './Star';
import 'bootstrap/dist/css/bootstrap.css';
import '/src/app/globals.css';

//Funcion que renderiza las estrellas en funcion de la valoracion del producto
function renderStars(rate) {
  const roundedRate = Math.round(rate);
  console.log(roundedRate);
  const stars = [];

  for (let i = 0; i < 5; i++){ //Recorremos 5 estrellas
    var status = "off"; //Por defecto la estrella esta apagada
    if (i < roundedRate) {
      status = "on"; //Si la posicion es menor que la valoracion, la estrella se enciende
    }
    stars.push(<Star key={i} status={status}/>);
  }
  return stars;
}

export function CardGpu( {title, price, img, id, rate} ) {
  return (
    <Card className="p-3 card text-dark rounded-5 d-flex flex-column justify-content-between">
      <div>
        {renderStars(rate)}
      </div>
      
      <div className="d-flex align-items-center justify-content-center" style={{ height: "310px" }} title={title}>
        <Card.Img variant="top" src={img} alt="GPU image" style={{ width: "300px"}} />
      </div>      
      
      <div>
        <Card.Body className="body-card mt-auto">
          <Card.Title className="title-card">{title}</Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-3">{price}</span>
            <Button variant="primary" className="ms-3 bg-success border border-0">
              <Link variant="primary" className="link-light link-underline-opacity-0" href={"./gpu/" + id}>Comprar</Link>
            </Button>            
          </div>
        </Card.Body>        
      </div>
      
    </Card>
  );
}