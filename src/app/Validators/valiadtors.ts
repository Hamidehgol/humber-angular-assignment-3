import { AbstractControl,ValidationErrors,ValidatorFn} from "@angular/forms"

export function customValidator():ValidatorFn
{
    return (control:AbstractControl ): ValidationErrors | null =>{
            const isPostalCodeCorrectCAN = control.get('postalcode')?.value.match(/[A-Z]\d[A-Z]\s\d[A-Z]\d/g);
            const isPostalCodeCorrectUS = control.get('postalcode')?.value.match(/\d\d\d\d\d/g);
           
            if(control.get('country')?.value=== 'US' && !isPostalCodeCorrectUS)
            {
            return {incorrectPostalCode : true};

            } else if(control.get('country')?.value=== 'CANADA' && !isPostalCodeCorrectCAN ) {
                return {incorrectPostalCode : true};  
            }else if(control.get('country')?.value=== null && !isPostalCodeCorrectCAN)
            {
                return {incorrectPostalCode : true};   
            }

          
           
         return null;}
}
