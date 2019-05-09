import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './app.scss';

import Menu from '../parts/menu';

import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import ProfilePage from '../pages/profile-page';
import RestorePage from '../pages/restore-page';

class App extends Component {
    componentDidMount() {
        window.onbeforeunload = function (e) {
            // return 'Sure?';
        };
    }

    render() {
        return (
            <div className="app-component">
                <Menu/>

                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/profile/:userId" component={ProfilePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route 
                        path={['/restore', '/forgot']} 
                        render={(props: any) => (<RestorePage {...props} extra="way adding variables in scope" />)}/>         

                    <Redirect to="/"/>
                </Switch>
            </div>
        );
    }
}

export default App;