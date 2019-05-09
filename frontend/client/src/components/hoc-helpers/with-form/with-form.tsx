import React from 'react';

import { FormConsumer } from '../../context/form-context';

const withForm = <T extends {}>(Wrapped: any) => {
    return (props: T) => {
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