import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MemberModel } from '../models/memberModel';
import { ValidationService } from '../validator/validationservice';

@Component({
  selector: 'app-createmember',
  templateUrl: './createmember.component.html',
  styleUrls: ['./createmember.component.css']
})
export class CreatememberComponent implements OnInit {
createMemberForm:FormGroup;
name:FormControl;
  constructor(private formBuilder: FormBuilder) { 
    this.createMemberForm = this.createFormGroupWithBuilder(formBuilder);
  }
types = [ 'primary', 'dependent' ]
  ngOnInit() {
  }


  createFormGroupWithBuilder(formBuilder: FormBuilder){
     return formBuilder.group({
       name: ['', [Validators.required, Validators.maxLength(5)]],
       type: '',
       email:['', ValidationService.emailValidator]       
     })

    // // return formBuilder.group(new MemberModel())
   }

   createFormGroup(){
    return new FormGroup({
      name: new FormControl(),
      type: new FormControl()       
    })
    }
    
    onSubmit(){
      let result: MemberModel = Object.assign({}, this.createMemberForm.value);
      console.log(result);
  }
   
  reset(){
    this.createMemberForm.reset();
  }
}
