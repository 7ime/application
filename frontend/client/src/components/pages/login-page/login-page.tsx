import React from 'react';

const LoginPage: React.FC = (props: any) => {
    console.log(props.match)
    return(
        <div>
            <h1>Login page</h1>
            <hr></hr>
            <h2>Match props</h2>
            <ul>
                <li key="1">isExact: {String(props.match.isExact)}</li>
                <li key="2">Params: {props.match.params.toString()}</li>
                <li key="3">path: {props.match.path}</li>
                <li key="4">url: {props.match.url}</li>
            </ul>
        </div>
    )
}

export default LoginPage;