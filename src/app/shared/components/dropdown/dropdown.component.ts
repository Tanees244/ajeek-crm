import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() selected: string | null = null;
  @Output() selectionChange = new EventEmitter<string>();

  onOptionSelected(option: string) {
    this.selected = option;
    this.selectionChange.emit(option);
  }
}
