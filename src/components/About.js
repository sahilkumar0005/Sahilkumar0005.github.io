import { Component } from "react";
import profile from "../profile.json";

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="resume-container">
                    <div className="bg-white p-5 pb-0" id="about">
                        <div className="about-section">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="h2 fw-light mb-4">About</h2>
                                    <div dangerouslySetInnerHTML={{__html: profile.bio}} />
                                </div>
                                <div className="col-md-5 offset-lg-1 d-print-none">
                                    <div className="row mt-2">
                                        <h2 className="h2 fw-light mb-4">&nbsp;</h2>
                                        <div className="col-sm-4">
                                            <div className="pb-2 fw-bolder"><i className="fas fa-phone pe-2 text-muted"
                                                style={{ width: "24px", opacity: "0.85" }}></i> Phone</div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="pb-2">{profile.mobile}</div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pb-2 fw-bolder"><i className="far fa-envelope pe-2 text-muted"
                                                style={{ width: "24px", opacity: "0.85" }}></i> Email</div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="pb-2">{profile.email}</div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pb-2 fw-bolder"><i className="fab fa-skype pe-2 text-muted"
                                                style={{ width: "24px", opacity: "0.85" }}></i> Skype</div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="pb-2">{profile.skype}</div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pb-2 fw-bolder"><i className="fas fa-map-marker-alt pe-2 text-muted"
                                                style={{ width: "24px", opacity: "0.85" }}></i> Address</div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="pb-2">{profile.address}</div>
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