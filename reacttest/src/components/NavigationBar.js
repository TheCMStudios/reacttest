import React from "react";

export function NavigationBar() {
    return (
        <section id="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a style={{fontWeight: 500}} className="navbar-brand" href="#">TheCMStudios</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link1" href="#slider">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutme">About Me</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </section>
    );
}