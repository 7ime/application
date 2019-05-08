import React from 'react';

import { withForm } from '../../../hoc-helpers';

class FormField extends React.Component<any, {}> {
    render() {
        return(
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default withForm(FormField);