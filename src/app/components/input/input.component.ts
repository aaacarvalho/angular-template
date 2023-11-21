import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'component-input',
  templateUrl: './input.template.html',
  styleUrls: ['./input.style.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type:
    | 'text'
    | 'email'
    | 'password'
    | 'phone'
    | 'date'
    | 'number'
    | 'file' = 'text';
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() mask: string | null = null;
  @Input() error: string | null = null;
  @Input() value: any = '';
  @Input() tooltip = false;

  onTouched: any = () => {};
  disabled = false;

  onChange: any = (value: any) => {
    this.value = value;
  };

  onInputChange(event: any): void {
    const value = this.mask
      ? event.target.value.replace(/\D+/g, '')
      : event.target.value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(onChangeFunction: Function): void {
    this.onChange = onChangeFunction;
  }

  registerOnTouched(onTouchedFunction: any): void {
    this.onTouched = onTouchedFunction;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
