import { Component } from "react";
import profile from "../profile.json";

export default class Education extends Component {
    render() {
        return (
            <div className="container">
                <div className="resume-container">
                    <div className=" bg-white p-5 pb-0" id="education">
                        <div className="education-section">
                            <h2 className="h2 fw-light mb-4">Education</h2>
                            <div className="timeline">
                                { 
                                    profile.education.map((value, index) => {
                                        return (<div className="timeline-card timeline-card-info" key={index.toString()}>
                                            <div className="timeline-head px-4 pt-3">
                                                <div className="h5">{value.degree} <span className="text-muted h6"><br/> {value.university}</span> </div>
                                            </div>
                                            <div className="timeline-body px-4">
                                                <div className="text-muted text-small mb-3">{value.from} {value.from && ' - '} {value.to}</div>
                                                <div>{value.description}</div>
                                            </div>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}