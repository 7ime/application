import React from 'react';

import { withForm } from '../../../hoc-helpers';

interface IPropsHOC {
    name: string,
    children: React.ReactElement
}

interface IProps extends IPropsHOC {
    provaider: any
}

class FormField extends React.Component<IProps, {}> {
    private formViewModel: any = this.props.provaider.formViewModel;

    private field: any = this.formViewModel.getField(this.props.name);

    render() {
        const { name } = this.props;

        return(
            <React.Fragment>
                { React.cloneElement(this.props.children, { name }) }
            </React.Fragment>
        )
    }
}

export default withForm<IPropsHOC>(FormField);