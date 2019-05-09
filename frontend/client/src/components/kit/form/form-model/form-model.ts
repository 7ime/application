interface IFields {
    [key: string]: {
        name: string,
        value: string | number,
        gist: string,
        rules?: {
            type: string,
            prompt: string
        }[],
        isValid: boolean
    }
}

class FormModel {
    private fields: IFields = {};

    private getField(name: string) {
        return this.fields.name;
    }

    private addField(field: any) {
        this.fields[field.name] = field;
    }

    private getFields() {
        return this.fields;
    }
}

export default FormModel;