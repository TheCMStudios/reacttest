import React from "react";

export function LatestNews() {
    return (
        <section id="news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Latest Video</h2>
                        <div className="latest-videos">
                            <iframe height="100%" width="100%" src="https://www.youtube.com/embed/kdLpVLHS0Z8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <button type="button" className="btn btn-primary">
                            <a style={{ color: "black", textDecoration: "none" }} href="https://www.youtube.com/channel/UCfqp50wlCviHGg7J6EF6UKw?">Visit channel</a>
                        </button>
                    </div>
                    <div className="col-md-5">
                        <h4>Basic Hopscotch Tips has been updated!</h4>
                        <div className="news-description">
                            <p>BHT has been updated to the newest version of Hopscotch (3.42.5)</p>
                        </div>
                        <button type="button" className="btn btn-primary">
                            <a style={{color: "black", textDecoration: "none"}} href="https://c.gethopscotch.com/p/113qr93uu4">Go to project</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}