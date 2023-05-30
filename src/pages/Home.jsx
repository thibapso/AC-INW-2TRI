import NavProjeto from "../components/NavProjeto";
import Cards from "../components/Cards";
import Cabecalho from "../components/Cabecalho";
import Carrossel from "../components/Carrossel";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
  return (
    <div calss="cabecalho">
      <Cabecalho />
      <div>
        <NavProjeto />
        <div>
          <Carrossel />
          <div className="home">
            <h1 class="h1-home">VEJA NOSSAS FERRAMENTAS!</h1>
            <p class="p-home">Compre já! Veja qual a melhor!</p>
          </div>
          <div className="card-group">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div><br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
