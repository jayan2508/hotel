import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [],
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() label = '';

  @Input() icon = '';

  @Input() isDisabled = false;

  @Input() buttonClass!: string;

  @Input() isLoading = false;

  @Output() onClick = new EventEmitter<Event>();

  @Output() onDblclick = new EventEmitter<Event>();

  click(event: Event): void {
    if (this.isDisabled || this.isLoading) {
      event.preventDefault();
      return;
    }

    this.onClick.emit(event);
  }

  dblclick(event: Event): void {
    this.onDblclick.emit(event);
  }
}
