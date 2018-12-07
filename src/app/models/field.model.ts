import {FieldType} from "./field-type.model";

export class Field {

  public name: string;
  public maxLength: number;
  public minLength: number;
  public pattern: string;
  public placeholder: string;
  public required: boolean;
  public color: string;
  public options: string;
  public onClickMethod: string;
  public onChangeMethod: string;
  public fieldType: FieldType;

  constructor(name?: string, maxLength?: number, minLength?: number, pattern?: string, placeholder?: string, required?: boolean, color?: string, options?: string, onClickMethod?: string, fieldType?: FieldType) {
    this.name = name;
    this.maxLength = maxLength;
    this.minLength = minLength;
    this.pattern = pattern;
    this.placeholder = placeholder;
    this.required = required;
    this.color = color;
    this.options = options;
    this.onClickMethod = onClickMethod;
    this.fieldType = fieldType;
  }

}
