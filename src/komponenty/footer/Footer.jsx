import "./footer.css";
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
} from "react-share"


export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Gdańsk, ul. Długa 119, biuro 4</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:123456789">+48 123456789</a>
                        </div>
                        <div className="d-flex">
                            <p>abc@abc.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footerNav">Home</a>
                                <br />
                                <a className="footerNav">O mnie</a>
                                <br />
                                <a className="footerNav">Usługi</a>
                            </div>
                            <div className="col">
                                <a className="footerNav">Doświadczenie</a>
                                <br />
                                <a className="footerNav">Portfolio</a>
                                <br />
                                <a className="footerNav">Kontakt</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url="https://github.com/madeysky"
                                quote="FullStack Developer"
                                hashtag="#JavaScript"
                                >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <FacebookMessengerShareButton
                                url="https://github.com/madeysky"
                                quote="FullStack Developer"
                                hashtag="#JavaScript"
                                >
                                <FacebookMessengerIcon className="mx-3" size={36} />
                            </FacebookMessengerShareButton>
                            <WhatsappShareButton
                                url="https://github.com/madeysky"
                                quote="FullStack Developer"
                                hashtag="#JavaScript"
                                >
                                <WhatsappIcon className="mx-3" size={36} />
                            </WhatsappShareButton>
                            <EmailShareButton
                                url="https://github.com/madeysky"
                                quote="FullStack Developer"
                                hashtag="#JavaScript"
                                >
                                <EmailIcon className="mx-3" size={36} />
                            </EmailShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;madeysky | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}