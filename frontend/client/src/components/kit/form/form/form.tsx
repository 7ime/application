import React from 'react';

import { FormProvider } from '../../../context/form-context';
import FormModel from '../form-model';
import FormViewModel from '../form-view-model';

interface IProps  { 
    onSuccess?: Function,
    fields: {
        [key: string]: {
            value?: string | number,
            gist?: string,
            rules?: {
                type: string,
                prompt: string
            }[]
        }
    },
    children: () => React.ReactNode
 }

export default class Form extends React.Component<IProps, {}> {
    private formViewModel: any = new FormViewModel(new FormModel());

    render() {
        const provaiderValue: any = {
            formViewModel: this.formViewModel
        };

        return(
            <FormProvider value={provaiderValue}>
                <form>
                    {this.props.children()}
                </form>
            </FormProvider>
        )
    }
}