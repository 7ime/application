import React from 'react';

import { Input } from '../fields';
import { Form, FormField, FormFlash, FormSubmit } from '../form';

class LoginForm extends React.Component {
    render() {
        return(
            <Form>
                {() => {
                    return(
                        <React.Fragment>
                            <h1>Hello World</h1>
                            <FormField>
                                <div>123</div>
                            </FormField>
                        </React.Fragment>
                    )
                }}
            </Form>
        )
    }
}

export default LoginForm;