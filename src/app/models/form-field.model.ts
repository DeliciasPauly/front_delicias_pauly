import {Field} from "./field.model";
import {FormFieldValue} from "./form-field-value.model";
import {FormControl} from "@angular/forms";

export class FormField {

  public id: number;
  public row: number;
  public col: number;
  public field: Field;
  public formControl: FormControl;
  public formFieldValue: FormFieldValue;
  public wsTokenizerCall: boolean;

  constructor(id?: number, row?: number, col?: number, field?: Field, formFieldValue?: FormFieldValue, wsTokenizerCall?: boolean) {
    this.id = id;
    this.row = row;
    this.col = col;
    this.field = field?field:new Field();
    this.formFieldValue = formFieldValue?formFieldValue:new FormFieldValue();
    this.wsTokenizerCall = wsTokenizerCall;
  }

}
