import "./experience.css";

export default function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Doświadczenie</h1>
            </div>
            <div className="container experienceWrapper">
                <div className="timelineBlock timelineBlockRight">
                    <div className="marker"></div>
                    <div className="timelineContent">
                        <h3>Kwiecień 2021 - trwa</h3>
                        <p>InVivo Medical Clinic - administrowanie strony internetowej i prowadzenie mediów społecznościowych</p>
                    </div>
                </div>
                <div className="timelineBlock timelineBlockLeft">
                    <div className="marker"></div>
                    <div className="timelineContent">
                        <h3>Październik 2021 - czerwiec 2022</h3>
                        <p>Wyższa Szkoła Bankowa - studia podyplomowe Programista aplikacji internetowych. Junior Web Developer</p>
                    </div>
                </div>
                <div className="timelineBlock timelineBlockRight">
                    <div className="marker"></div>
                    <div className="timelineContent">
                        <h3>Czerwiec 2022 - trwa</h3>
                        <p>Realizacja projektów dla klientów</p>
                    </div>
                </div>
            </div>
        </div>
    )
}