import { Injectable } from "@angular/core";

@Injectable()
export class ValidationService{
        static emailValidator(control){
            if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                return null;
            } else {
                return { 'invalidEmailAddress': true };
            }
        }

        static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
            let config = {
                'required': 'Required',
                'invalidEmailAddress': 'Invalid email address',                
                'minlength': `Minimum length ${validatorValue.requiredLength}`
            };
    
            return config[validatorName];
        }
}
