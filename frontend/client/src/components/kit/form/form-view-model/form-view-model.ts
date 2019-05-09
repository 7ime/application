import FormModel from '../form-model';

class FormViewModel {
    private formModel: any = new FormModel();
    private customFields: any;

    constructor(customFields: any) {
        this.customFields = customFields;

        this.init();
    }

    private init(): void {
        this.addFields();
    }

    private addFields(): void {
        for(let key in this.customFields) {
            const field = {...this.customFields[key]};

            field.name = key;

            if(!field.gist) {
                field.gist = 'textfield';
            }

            if(!field.value) {
                field.value = '';
            }

            field.isValid = !field.rules ? true : false;

            this.formModel.addField(field);
        }
    }

    private getField(name: string) {
        return this.formModel.getField(name);
    }
}

export default FormViewModel;