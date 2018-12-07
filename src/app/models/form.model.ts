import {FormField} from "./form-field.model";

export class Form {

  public id: number;
  public name: string;
  public description: string;
  public active: boolean;
  public formFields: FormField[];

  constructor(id?: number, name?: string, description?: string, active?: boolean, formFields?: FormField[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.active = active;
    this.formFields = formFields;
  }

}
