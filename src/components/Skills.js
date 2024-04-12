import { Component } from "react";
import profile from "../profile.json"

export default class Skills extends Component {
    render() {
        const skill = profile.skills.map((value, key) => {
            return (
                <div className="col-6 col-sm-3 col-md-2" key={key.toString()}>
                    <div className="mb-3">
                        <span className="fw-bolder">{value.name}</span>
                        
                    </div>
                </div>
            )
        }) 
        return (
            <div className="container">
                <div className="resume-container">
                    <div className="bg-white p-5 pb-0" id="skills">
                        <div className="skills-section">
                            <h2 className="h2 fw-light mb-4">Professional Skills</h2>
                            <div className="row">
                                {skill}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}