import React from 'react';
import Helmet from 'react-helmet';

import LoginForm from '../../parts/login-form';

import './home-page.scss';

const HomePage: React.FC = (props: any) => {
    return(
        <React.Fragment>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <LoginForm/>
        </React.Fragment>
    )
}

export default HomePage;