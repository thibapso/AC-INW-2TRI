import NavProjeto from "../components/NavProjeto";
import Cabecalho from "../components/Cabecalho";
import Descubra from "../components/Descubra";
import Footer from "../components/Footer";
import "../App.css";

function Sobre() {
  return (
    <div>
      <Cabecalho />
      <div>
        <NavProjeto />
      </div>
      <div>
        <Descubra />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Sobre;
