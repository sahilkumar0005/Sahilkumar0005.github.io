import { Component } from "react";
import { NavLink } from "react-router-dom";
import profile from "../profile.json";

export default class Header extends Component {
    
    render() {
        const navLinks = profile.nav.map((link, index) =>
            <li className="nav-item" key={index.toString()}>
                <a className="nav-link" href={`${link.href}`} title={link.name}>
                    <span className="menu-title">{link.name}</span>
                </a>
            </li>
        );
        return (
            <>
                <header className="d-print-none">
                    <div className="container text-center text-lg-left">
                        <div className="pt-4 clearfix">
                            <NavLink to={"/"}>
                                <h1 className="site-title mb-0">
                                    {profile.name}
                                </h1>
                            </NavLink>
                            <div className="site-nav">
                                <nav role="navigation">
                                    <ul className="nav justify-content-center">
                                        {navLinks}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}