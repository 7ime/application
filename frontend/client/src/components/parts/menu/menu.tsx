import React, { Component } from 'react';
import { NavLink, withRouter, Prompt } from 'react-router-dom';

import './menu.scss';

class Menu extends Component<any> {

    handleClickPrev = () => {
        const { history } = this.props;
        history.goBack();
    }

    handleClickNext = () => {
        const { history } = this.props;

        history.goForward();
    }

    handleClickPush = () => {
        const { history } = this.props;

        history.push({
            pathname: "/login",
            state: { fromClick: true }
        });
    }

    handleClickReplace = () => {
        const { history } = this.props;

        history.replace('/restore');
    }

    handleClickBlock = () => {
        const { history } = this.props;

        history.block(() => {
            alert('Are you sume?')
        });
    }

    render() {
        return(
            <div className="menu-component">
                <div>
                    <NavLink to="/" exact className="menu-link">Home Page</NavLink>
                    <NavLink to="/login" exact className="menu-link">Login Page</NavLink>
                    <NavLink to="/profile/1" exact className="menu-link">Profile Page</NavLink>
                    <NavLink to="/restore" className="menu-link">Restore Page</NavLink>
                </div>
                {/* <div>
                    <button onClick={this.handleClickPrev}>history.goBack()</button>
                    <button onClick={this.handleClickNext}>history.goForward()</button>
                    <button onClick={this.handleClickPush}>history.push('/login')</button>
                    <button onClick={this.handleClickReplace}>history.replace('/restore')</button>
                    <button onClick={this.handleClickBlock}>history.block('Are you sure?')</button>
                </div>
                <div>
                    <Prompt when={this.props.location.pathname === '/login'} message="Are you sure you want to leave?" />
                </div> */}
            </div>
        )
    }
}

export default withRouter(Menu);