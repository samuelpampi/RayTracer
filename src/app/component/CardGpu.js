import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Star from './Star';
import 'bootstrap/dist/css/bootstrap.css';
import '/src/app/globals.css';

export function CardGpu() {
  return (
    <Card className="d-inline-block p-3 card text-light rounded-5">
      <p><Star/><Star/><Star/><Star/><Star/></p>
      <Card.Img variant="top" src="img/4090.png" alt="GPU image" style={{ width: "300px" }} />
      <Card.Body>
        <Card.Title className="title-card">RTX 4090</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-3">$1999</span>
          <Button variant="primary" className="ms-3 bg-success border border-0">Comprar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}