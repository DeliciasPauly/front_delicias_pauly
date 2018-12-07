import {FormField} from "./form-field.model";
import {TransactionContext} from "./transaction-context.model";

export class FormFieldValue {

  public id: number;
  public value: any;
  public preFilled: boolean;
  public formField: FormField;
  public transactionContext: TransactionContext;

  constructor(id?: number, value?: string, preFilled?: boolean, formField?: FormField, transactionContext?: TransactionContext) {
    this.id = id;
    this.value = value;
    this.preFilled = preFilled;
    this.formField = formField;
    this.transactionContext = transactionContext;
  }

}
