import React from "react";
import baixar from "../Images//Wallpaper-4K-Full-HD-155-1024x768-Wallpaper-Baixar-Papel-.jpg";
import main from "../Images/background-1024x512.jpg";

export function Slider() {
    return (
        <div id="slider">
            <div id="headerSlider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={main} className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Welcome to my first website!</h5>
                            <p>Here you'll find news and some information about me and what I do on the Hopscotch Forum and the Hopscotch app</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={baixar} className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>News!</h5>
                            <p>You can find news about upcoming games or anything from me about Hopscotch</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/wallpaper-de-praia-ao-por-do-sol.jpg" className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>About Me!</h5>
                            <p>Learn a bit more about what I do on the Hopscotch app and the Hopscotch forum</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}