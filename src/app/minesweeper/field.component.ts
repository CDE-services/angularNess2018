import {Component, Input} from '@angular/core';
import {Field} from './core/field';

@Component({
  selector: 'field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.css']
})
export class FieldComponent {
  @Input() field : Field = new Field(10, 9, 8);
}
