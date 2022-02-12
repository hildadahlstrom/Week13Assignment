import React from 'react';
import Navigation from './navigation';
import LoginForm from './login-form';

export default class HomePage extends React.Component{
    render(){
        return(
            <div className = "container-fluid homepage">
                <Navigation/>
                <LoginForm/>
            </div>
        );
    }
}