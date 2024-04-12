import { Component } from "react";
import profile from "../profile.json"

export default class Experience extends Component {
    render() {
        return (
            <div className="container">
                <div className="resume-container">
                    <div className=" bg-white p-5 pb-0" id="experience">
                        <div className="work-experience-section">
                            <h2 className="h2 fw-light mb-4">Work Experience</h2>
                            <div className="timeline">
                                {
                                    profile.workExperience.map((value, index) => {
                                        return (
                                            <div className="timeline-card timeline-card-info" key={index.toString()}>
                                                <div className="timeline-head px-4 pt-3">
                                                    <div className="h5">{value.desination} <span className="text-muted h6">at {value.company}</span></div>
                                                </div>
                                                <div className="timeline-body px-4 pb-4">
                                                    <div className="text-muted text-small mb-3">{value.from} - {value.to}</div>
                                                    <div dangerouslySetInnerHTML={{__html: value.jobDescription}}></div>
                                                </div>
                                            </div>
                                        )
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