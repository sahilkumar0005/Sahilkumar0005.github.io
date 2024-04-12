import { Component } from "react";
import BgCover from "../assets/images/header-background.jpg";
import avatar from "../assets/images/avatar.JPG";
import resume from "../assets/resume/SahilKumar CV.pdf";
import profile from "../profile.json";

export default class Intro extends Component {
    render() {
        const socialLinks = Object.keys(profile.socialLinks).map((key) =>
            <li className="nav-item" key={key}>
                <a className="nav-link" href={`https://${key}.com/${profile.socialLinks[key]}`} title={`${key.toUpperCase()}`}>
                    <i className={`fab fa-${key}`}></i>
                    <span className="menu-title sr-only">{`${key.toUpperCase()}`}</span>
                </a>
            </li>
        );

        return (
            <div className="container">
                <div className="resume-container">
                    <div className="bg-white my-5 mb-0" id="intro">
                        <div className="bg-info text-white">
                            <div className="cover bg-image"><img src={BgCover} alt="img1" />
                                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(2px)" }}>
                                    <div className="text-center p-5">
                                        <div className="avatar p-1"><img className="img-thumbnail shadow-2-strong" alt="img2" src={avatar} width="160" height="160" /></div>
                                        <div className="header-bio mt-3">
                                            <div>
                                                <h2 className="h1">{profile.name}</h2>
                                                <p>{profile.desination}</p>
                                            </div>
                                            <div className="header-social mb-3 d-print-none d-none" >
                                                <nav role="navigation">
                                                    <ul className="nav justify-content-center">
                                                        {socialLinks}
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="d-print-none">
                                                <a className="btn btn-outline-light btn-lg shadow-sm mt-1 me-3"
                                                    href={resume} target="_blank" rel="noopener noreferrer">Download CV</a>
                                                <a className="btn btn-site-org btn-lg shadow-sm mt-1" href="#contact">Hire Me</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}