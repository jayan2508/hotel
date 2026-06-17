import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

interface InputAttribute {
  key: string;
  value: any;
  __trackId?: string;
}

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.compont.html',
  styleUrl: './input.compont.scss',
})
export class InputCompont implements OnInit, OnChanges {
  @ViewChild('inputRef')
  inputRef!: ElementRef<HTMLInputElement>;
  @Input() type = 'text';
  @Input() attributes: InputAttribute[] = [];
  @Input() fieldName: string = '';
  @Input() placeHolder: string = '';
  @Input() inputClass = '';
  @Input() value = '';
  @Input() isDisabled = false;
  @Input() errorMessage: any[] = [];
  @Input() isRequired: boolean = false;
  @Input() options: { label: string; value: any }[] = [];
  id = '';

  @Output() inputValue = new EventEmitter<any>();
  @Output() changeValue = new EventEmitter<Event>();
  @Output() onFocus = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.id = String(Math.floor(10000 + Math.random() * 90000));

    if (this.errorMessage.length) {
      this.errorMessage = this.errorMessage.map((value: any) => {
        return { ...value, __trackId: String(Math.floor(10000 + Math.random() * 90000)) };
      });
    }
  }

  ngAfterViewInit(): void {
    this.applyAttributes();
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change['attributes']) {
      this.applyAttributes();
    }
  }

  applyAttributes(): void {
    if (!this.inputRef) return;

    this.attributes.forEach((attr) => {
      this.renderer.setAttribute(this.inputRef.nativeElement, attr.key, String(attr.value));
    });
  }

  input(event: Event): void {
    const value = (event.target as any)?.value || '';
    console.log(this.fieldName, value || '');
    // this.inputValue.emit({
    //   field: this.fieldName,
    //   value: value,
    // });
  }

  change(event: Event): void {
    this.changeValue.emit(event);
    const value = (event.target as any)?.value || '';
    console.log('change', this.fieldName, value || '', this.value);

    console.log(this.value);
    this.inputValue.emit({
      field: this.fieldName,
      value: value,
    });
  }

  focus(event: Event): void {
    this.onFocus.emit(event);
  }

  blur(event: Event): void {
    this.onBlur.emit(event);
  }
}
