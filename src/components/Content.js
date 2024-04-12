import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default class Content extends Component {
    render() {
        return (
            <div className="page-content">
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                </Routes>
            </div>
        )
    }
}