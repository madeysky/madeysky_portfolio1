import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";




export default function Services() {
    return (
        <div id="services" className="services">
            <h1 className="py-5">moje usługi</h1>
                <div className="container">
                    <div className="row rowServices">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                                <h3>Projektowanie Stron Internetowych</h3>
                                <p>Podchodzę do każdego projektu indywidualnie. Najważniejszy dla mnie jest efekt końcowy.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                                <h3>Tworzenie Stron Internetowych</h3>
                                <p>Twoją stronę zbuduję w oparciu o najnowsze technologie</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>
                                <h3>Prowadzenie Mediów Społecznościowych</h3>
                                <p>Twoi potencjalni klienci bez trudu odnajdą Twój produkt lub usługę na Facebooku, Instagramie itp.</p>
                            </div>
                        </div>

                    </div>
                </div>
            
        </div>
    )
}