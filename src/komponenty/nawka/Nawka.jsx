import logo from "../../../src/logo1.jpeg";
import "./nawka.css";
//React Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";


export default function Nawka() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <div className="container">
    <Link smooth={true} to="home" offset={-110} className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon= {faBars} style={{color: "var(--primary-white)"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link smooth={true} to="home" offset={-110} className="nav-link" aria-current="page" href="#">Home</Link> 
        </li>
        <li className="nav-item">
          <Link smooth={true} to="omnie" offset={-110} className="nav-link" href="#">O mnie</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Usługi</Link> 
        </li>
        <li className="nav-item">
          <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Doświadczenie</Link> 
        </li>
        <li className="nav-item">
          <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="kontakt" offset={-110} className="nav-link" href="#">Kontakt</Link> 
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}