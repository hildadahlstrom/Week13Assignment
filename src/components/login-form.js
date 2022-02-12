import React from "react";

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className = "row login-screen">
                <div className = "col-sm-4 center-login">
                    <h3 className = "login-header">Log In</h3>
                    <div className = "form-group">
                        <label htmlFor ="loginUsername">Username</label>
                        <input type = "text" className = "username" id = "loginUsername"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor= "loginPassword">Password  </label>
                        <input type = "text" className = "username" id = "loginPassword"/>
                    </div>
                    <br/>
                    <button className = "btn submit-button" type = "submit">Submit</button>
                </div>
            </div>
        );
    }
}