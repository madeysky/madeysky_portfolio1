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
                        <h3>2021-nadal</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illo fugit cum deleniti quae rerum, dignissimos doloribus modi adipisci, voluptatum quos alias laudantium ducimus, eum maxime. Iure porro dolore aperiam tempora ducimus, voluptatem minima et quis esse sint corporis quas!</p>
                    </div>
                </div>
                <div className="timelineBlock timelineBlockLeft">
                    <div className="marker"></div>
                    <div className="timelineContent">
                        <h3>2021-2022</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illo fugit cum deleniti quae rerum, dignissimos doloribus modi adipisci, voluptatum quos alias laudantium ducimus, eum maxime. Iure porro dolore aperiam tempora ducimus, voluptatem minima et quis esse sint corporis quas!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}