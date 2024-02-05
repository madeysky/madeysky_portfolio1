import "./portfolio.css";

import wsz from "../../obrazy/wsz.webp";
import ell from "../../obrazy/ell.webp";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {


    return (
        <div id="portfolio" className="portfolioWrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="imageBoxWrapper">

                    <Card className="portfolioCard">
                        <Card.Img className="portfolioImg" variant="top" src={wsz} />
                        <Card.Body className="cardBody">
                            <Card.Title className="cardTitle">"Wasza Szansa"</Card.Title>
                            <Card.Text className="cardText">
                                Centrum ajurwedy.
                            </Card.Text>
                            <Button href="https://madeysky.github.io/wasza-szansa/" target="_blank" className="btnMainOffer portfolioBTN" variant="primary">
                                Odwiedź Stronę
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className="portfolioCard">
                        <Card.Img className="portfolioImg" variant="top" src={ell} />
                        <Card.Body className="cardBody">
                            <Card.Title className="cardTitle" >"ELLTRANS sp. z o.o. sp. k."</Card.Title>
                            <Card.Text className="cardText">
                                Przedsiębiorstwo transportowe.
                            </Card.Text>
                            <Button href="https://www.elltrans.pl/" target="_blank" className="btnMainOffer portfolioBTN">
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