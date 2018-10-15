import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import{ValidationService} from './validationservice'

@Component({
  selector: 'control-messages',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {
  @Input() control:FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }
  ngOnInit() {
  }

}
