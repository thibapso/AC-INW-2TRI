import Card from "react-bootstrap/Card";
import descubra from "../assets/descubra.jpg";

function Descubra() {
  return (
    <>
      <Card>
        <Card.Body className="descubra">
          <Card.Title className="descubra-titulo">Saiba Mais!</Card.Title>
          <Card.Text className="descubra-texto">
            Como uma loja de ferramentas especializada, entendemos as exigências
            e expectativas dos nossos clientes. Desde ferramentas manuais até
            máquinas de última geração, temos uma ampla variedade de opções para
            atender a todos os níveis de habilidade e projetos. Navegue pelo
            nosso site para explorar nossa vasta seleção de produtos. Cada item
            é cuidadosamente descrito e acompanhado de informações técnicas
            relevantes para ajudá-lo a tomar a melhor decisão. E se tiver alguma
            dúvida, nossa equipe de suporte está sempre pronta para ajudar.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={descubra} />
      </Card>
    </>
  );
}

export default Descubra;
