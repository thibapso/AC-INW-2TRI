import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/ferramentas.png';

function Cards() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="Ferramentas" />
      <Card.Body>
        <Card.Title>Compre Já!</Card.Title>
        <Card.Text>
          Adquira esta maleta de ferramentas!
        </Card.Text>
        <Button variant="primary">COMPRAR</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;