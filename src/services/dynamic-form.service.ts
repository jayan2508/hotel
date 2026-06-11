// dynamic-form.service.ts

import { Injectable } from '@angular/core';
import {
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

export type DynamicFieldType =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'array'
  | 'group';

export interface DynamicField {
  key: string;

  type?: DynamicFieldType;

  value?: any;

  label?: string;

  placeholder?: string;

  disabled?: boolean;

  validators?: ValidatorFn[];

  asyncValidators?: AsyncValidatorFn[];

  updateOn?: 'change' | 'blur' | 'submit';

  // select/radio
  options?: {
    label: string;
    value: any;
  }[];

  // nested form group
  fields?: DynamicField[];

  // form array
  arrayFields?: DynamicField[];
}

@Injectable()
export class DynamicFormService {
  constructor(private fb: FormBuilder) {}

  createForm(fields: DynamicField[]): FormGroup {
    const controls: any = {};

    fields.forEach((field) => {
      controls[field.key] = this.createControl(field);
    });

    return this.fb.group(controls);
  }

  private createControl(field: DynamicField): any {
    // nested form group
    if (field.type === 'group') {
      return this.createForm(field.fields || []);
    }

    // form array
    if (field.type === 'array') {
      return this.fb.array((field.value || []).map(() => this.createForm(field.arrayFields || [])));
    }

    // normal form control
    return new FormControl(
      {
        value: field.value ?? '',
        disabled: field.disabled ?? false,
      },
      {
        validators: field.validators || [],
        asyncValidators: field.asyncValidators || [],
        updateOn: field.updateOn || 'change',
      } as AbstractControlOptions,
    );
  }

  // dynamic add form array item
  addArrayItem(form: FormGroup, arrayKey: string, fields: DynamicField[]): void {
    const formArray = form.get(arrayKey) as FormArray;

    formArray.push(this.createForm(fields));
  }

  // remove form array item
  removeArrayItem(form: FormGroup, arrayKey: string, index: number): void {
    const formArray = form.get(arrayKey) as FormArray;

    formArray.removeAt(index);
  }
}
