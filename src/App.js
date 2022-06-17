import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Nawka from "./komponenty/nawka/Nawka";
import Header from './komponenty/header/Header';
import Particle from './komponenty/particles/Particle';
import OMnie from './komponenty/omnie/OMnie';
import Services from './komponenty/services/Services';
import Experience from './komponenty/experience/Experience';
import Portfolio from './komponenty/portfolio/Portfolio';
import Kontakt from './komponenty/kontakt/Kontakt';
import Footer from './komponenty/footer/Footer';



function App() {
  return (
    <>
      <Particle />
      <Nawka />
      <Header />
      <OMnie />
      <Services />
      <Experience />
      <Portfolio />
      <Kontakt/>
      <Footer/>
    </>
  );
}

export default App;
