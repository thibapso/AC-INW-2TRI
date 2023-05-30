import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
  return (
    <>
      <Navbar bg="#5260ff" variant="lite">
        <Container class="cabecalho" href="/">
            <h2 class="h2-cabecalho">Loja de Ferramentas - Thiago Baptista</h2>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabecalho;