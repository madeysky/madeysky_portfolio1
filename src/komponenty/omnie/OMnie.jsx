import "./omnie.css";
import profilePicture from "../../profilowe.jpeg"



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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat aliquam iusto ratione, ad nulla neque voluptas nisi ullam at maxime aliquid sint? Asperiores impedit, dolores iste voluptas quae dolorum eius adipisci consequuntur voluptate accusantium omnis molestias quod dolore tenetur beatae voluptatibus vel, temporibus, atque saepe. Doloremque maiores nihil totam dolor aut fugiat saepe tempore distinctio voluptatum, suscipit ipsam, voluptate ipsum culpa quis nesciunt labore deserunt vero quia esse ipsa! Ducimus ipsa repudiandae delectus iure animi explicabo, quibusdam harum nostrum accusamus tempore asperiores beatae. Quod consequatur voluptates alias, itaque facere voluptate expedita ducimus reprehenderit excepturi, soluta necessitatibus quisquam eos? Dolor!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat aliquam iusto ratione, ad nulla neque voluptas nisi ullam at maxime aliquid sint? Asperiores impedit, dolores iste voluptas quae dolorum eius adipisci consequuntur voluptate accusantium omnis molestias quod dolore tenetur beatae voluptatibus vel, temporibus, atque saepe. Doloremque maiores nihil totam dolor aut fugiat saepe tempore distinctio voluptatum, suscipit ipsam, voluptate ipsum culpa quis nesciunt labore deserunt vero quia esse ipsa! Ducimus ipsa repudiandae delectus iure animi explicabo, quibusdam harum nostrum accusamus tempore asperiores beatae. Quod consequatur voluptates alias, itaque facere voluptate expedita ducimus reprehenderit excepturi, soluta necessitatibus quisquam eos? Dolor!
                    </p>
                </div>
            </div>

        </div>
    )
}