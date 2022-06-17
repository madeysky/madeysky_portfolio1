import "./portfolio.css";

import fdm from "../../obrazy/fdm.png";
import p85 from "../../obrazy/p85.png";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {


    return (
        <div id="portfolio" className="portfolioWrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="imageBoxWrapper">

                    <Card className="portfolioCard">
                        <Card.Img className="portfolioImg" variant="top" src={fdm} />
                        <Card.Body className="cardBody">
                            <Card.Title className="cardTitle">"Fizjoterpia Dominika Madej"</Card.Title>
                            <Card.Text className="cardText">
                                Wizytówka indywidulanej praktyki fizjoterapeutycznej.
                            </Card.Text>
                            <Button href="https://madeysky.github.io/Strona-Dominiki/" target="_blank" className="btnMainOffer portfolioBTN" variant="primary">
                                Odwiedź Stronę
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className="portfolioCard">
                        <Card.Img className="portfolioImg" variant="top" src={p85} />
                        <Card.Body className="cardBody">
                            <Card.Title className="cardTitle" >"Projekt 85"</Card.Title>
                            <Card.Text className="cardText">
                                Blog osobisty o tematyce sportowej i stylu życia.
                            </Card.Text>
                            <Button href="https://madeysky.github.io/projekt_85/" target="_blank" className="btnMainOffer portfolioBTN">
                                Odwiedź Stronę
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            );
        </div>
    )
}