import React from 'react';
import Helmet from 'react-helmet';

const RestorePage: React.FC = (props: any) => {
    return(
        <React.Fragment>
            <Helmet>
                <title>Restore Page</title>
            </Helmet>
            <div>Restore Page {props.extra}</div>
        </React.Fragment>
    )
}

export default RestorePage;