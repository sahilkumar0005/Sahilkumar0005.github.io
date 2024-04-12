import { Component } from "react";
import profile from "../profile.json"

export default class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="resume-container">
                    <div className=" bg-white p-5 pb-0" id="contact">
                        <div className="contant-section text-center">
                            <h2 className="h2 fw-light text mb-4">Contact</h2>
                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <div className="mt-1">
                                        <div className="h6">
                                            <a href={`tel:${(profile.mobile).replace(" ", "")}`}>
                                                <i className="fas fa-phone pe-2 text-muted" style={{width:"24px",opacity:"0.85"}}></i>
                                                {profile.mobile}
                                            </a>
                                        </div>
                                        <div className="h6">
                                            <a href={`mailto:${(profile.email)}`}>
                                                <i className="far fa-envelope pe-2 text-muted" style={{width:"24px",opacity:"0.85"}}></i>
                                            {profile.email}
                                            </a>
                                        </div>
                                        <div className="h6">
                                            <i className="fab fa-skype pe-2 text-muted" style={{width:"24px",opacity:"0.85"}}></i>
                                            {profile.skype}
                                        </div>
                                        <div className="h6">
                                            <i className="fas fa-map-marker-alt pe-2 text-muted" style={{width:"24px",opacity:"0.85"}}></i>
                                            {profile.address}
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