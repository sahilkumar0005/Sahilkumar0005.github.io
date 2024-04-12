import { Component } from "react";
import profile from "../profile.json";

export default class Footer extends Component {
    render() {
        const socialLinks = Object.keys(profile.socialLinks).map((key) =>
            <li className="nav-item" key={key}>
                <a className="nav-link" href={`https://${key}.com/${profile.socialLinks[key]}`} title={`${key.toUpperCase()}`}>
                    <i className={`fab fa-${key}`}></i>
                    <span className="menu-title sr-only">{`${key.toUpperCase()}`}</span>
                </a>
            </li>
        );

        console.log(socialLinks)

        return (
            <footer className="pt-4 pb-4 text-muted text-center d-print-none">
                <div className="container">
                    <div className="my-3">
                        <div className="h4">{profile.name}</div>
                    </div>
                    <div className="text-small">
                        <div className="mb-1">&copy; {new Date().getFullYear()}. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        )
    }
}