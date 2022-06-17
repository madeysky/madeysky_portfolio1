import "./header.css";
import Typed from "react-typed"
import { Link } from "react-scroll";


export default function Header() {
  return (
    <div id="home" className="headerWrapper">
        <div className="mainInfo">
            <h1>Tworzenie Stron Internetowych</h1>
            <Typed className="typedText"
            strings={["Projektowanie Stron Internetowych", "Tworzenie Stron Internetowych", "Prowadzenie Mediów Społecznościowych"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <Link smooth={true} to="kontakt" offset={-110} className="btnMainOffer">Kontakt</Link>
        </div>
    </div>
  )
}