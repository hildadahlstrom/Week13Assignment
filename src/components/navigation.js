import React from "react";

export default class Navigation extends React.Component{
    render(){
        return(
            <nav className = "navbar navbar-expand-sm navbar-dark">
                <div className = "container-fluid">
                    <ul className = "navbar-nav">
                        <li className = "nav-item active">
                            <button className="btn">Home</button>
                        </li>
                        <li className = "nav-item">
                            <button className="btn">About</button>
                        </li>
                        <li className = "nav-item">
                            <button className="btn">Contact</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}