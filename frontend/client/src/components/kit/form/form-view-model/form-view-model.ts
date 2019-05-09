class FormViewModel {
    private formModel: any;

    constructor(formModel: any) {
        this.formModel = formModel;
    }

    private getField(name: string) {
        return this.formModel.getField(name);
    }
}

export default FormViewModel;