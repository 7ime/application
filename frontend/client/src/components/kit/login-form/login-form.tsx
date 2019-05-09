import React from 'react';

import { Input } from '../fields';
import { Form, FormField, FormFlash, FormSubmit } from '../form';

class LoginForm extends React.Component {
    render() {
        const fields = {
            email: {
                rules: [
                    {
                        type: 'required',
                        prompt: 'Введите email'
                    },
                    {
                        type: 'email',
                        prompt: 'Введите корректный email'
                    }
                ]
            },
            password: {
                rules: [
                    {
                        type: 'required',
                        prompt: 'Введите пароль'
                    },
                    {
                        type: 'minLength[6]',
                        prompt: 'Пароль должен быть не менее 6 символов'
                    }
                ]
            }
        }
        
        return(
            <Form
                fields={fields}>
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