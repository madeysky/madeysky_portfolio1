import "./omnie.css";
import profilePicture from "../../profilowe.webp"



export default function OMnie() {
    return (
        <div id="omnie" className="container py-5">
            <div className="row">
                <div className="col-lg-6 com xm-12">
                    <div className="photoWrap mb-5">
                        <img className="profilePicture" src={profilePicture} alt="profile picture" />
                    </div>

                </div>
                <div className="col-lg-6 com xm-12">
                    <h1 className="aboutHeading">O mnie</h1>
                    <p>
                    Jestem freelancerem z pasją do projektowania stron internetowych i skutecznego prowadzenia mediów społecznościowych. Moja przygoda z branżą rozpoczęła się w kwietniu 2021 roku, kiedy to objąłem stanowisko administratora strony internetowej i Facebooka dla InVivo Medical Clinic. Choć wówczas nie posiadałem znacznej wiedzy, postanowiłem połączyć to zatrudnienie z pracą na etacie, aby zdobywać doświadczenie i poszerzać horyzonty.
                    </p>
                    <p>W październiku 2021 roku podjąłem decyzję o rozwinięciu moich umiejętności poprzez podjęcie studiów podyplomowych z Programowania Aplikacji Internetowych, gdzie zdobyłem solidne fundamenty w dziedzinie technologii. Przez ten czas poznałem kluczowe języki programowania, takie jak HTML5/CSS, JavaScript, a także framework ReactJS. Zdobyłem także umiejętność efektywnego korzystania z systemów zarządzania treścią (CMS), jak również praktyczne doświadczenie z narzędziami takimi jak Bootstrap czy preprocesory CSS, takie jak SCSS/SASS.
                       Mój dorobek obejmuje współpracę z różnorodnymi branżami, takimi jak: interdyscyplinarne leczenie niepłodności, medycyna alternatywna oraz transport i spedycja. To doświadczenie pozwoliło mi zrozumieć unikalne potrzeby i wyzwania różnych sektorów, co umożliwia mi dostosowywanie moich usług do konkretnych oczekiwań klientów.
                    </p>
                    <p>
                    Jako freelancer nieustannie dążę do doskonalenia moich umiejętności i śledzenia najnowszych trendów w projektowaniu stron internetowych i marketingu online. Jestem gotów podjąć nowe wyzwania, a moja determinacja i zaangażowanie pozwalają mi tworzyć innowacyjne i skuteczne rozwiązania dla moich klientów. Jeśli szukasz profesjonalisty, który połączy kreatywność z techniczną precyzją, chętnie podejmę współpracę, aby wspólnie osiągnąć cele Twojego projektu.
                    </p>
                    
                </div>
            </div>

        </div>
    )
}