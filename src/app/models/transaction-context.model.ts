import {System} from "./system.model";
import {Action} from "./action.model";
import {Form} from "./form.model";
import {FormFieldValue} from "./form-field-value.model";

export class TransactionContext {

  public uuid: string;
  public epr: string;
  public validity: string;
  public basket: string;
  public system: System;
  public editable: boolean;
  public action: Action;
  public form: Form;
  public formFieldValues: FormFieldValue[];

  constructor(uuid?: string, epr?: string, validity?: string, basket?: string, system?: System, action?: Action, form?: Form, formFieldValues?: FormFieldValue[]) {
    this.uuid = uuid;
    this.epr = epr;
    this.validity = validity;
    this.basket = basket;
    this.system = system?system:new System();
    this.action = action?action:new Action();
    this.form = form?form:new Form();
    this.formFieldValues = formFieldValues?formFieldValues:[];
  }

}
