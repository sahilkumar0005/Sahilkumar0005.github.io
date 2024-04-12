import { Component } from "react";
import profile from "../profile.json";

export default class Projects extends Component {
    render() {
        return (
            <div className="container">
                <div className="resume-container">
                    <div className="bg-white p-5 pb-0 d-print-none" id="projects">
                        <div className="portfolio-section">
                            <h2 className="h2 fw-light mb-4">Projects</h2>
                            <div className="row g-0">
                                {
                                    profile.projects.map((value, key)=> {
                                        return (
                                            <div className="col-md-12 d-flex align-items-center" key={key}>
                                                <div className="mt-md-2">
                                                    <h3>{value.name}</h3>
                                                    <p className="text-muted"><b>Description</b>: {value.description}</p>
                                                    <p className="text-muted"><b>Technology & Tools</b>: {value.skills}</p>
                                                    <div dangerouslySetInnerHTML={{__html: value.responsibilities}}></div>
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