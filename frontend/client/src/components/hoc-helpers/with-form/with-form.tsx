import React from 'react';

import { FormConsumer } from '../../context/form-context';

const withForm = (Wrapped: any) => {
    return (props: any) => {
        return(
            <FormConsumer>
                {
                    (value: any) => {
                        return <Wrapped {...props} provaider={value}/>
                    }
                }
            </FormConsumer>
        )
    }
}

export default withForm;