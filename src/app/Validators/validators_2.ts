import { AbstractControl,ValidationErrors,ValidatorFn} from "@angular/forms"
export function cvcValidator():ValidatorFn
{
    
    return (control:AbstractControl ): ValidationErrors | null =>{  
        const isCVCCorrect = control.get('cvc')?.value.match(/\d\d\d\d/g);
        console.log(isCVCCorrect) 
        if(!isCVCCorrect)
        {
           console.log(isCVCCorrect) 
        return {incorrectCVC : true};

        }
        return null;
    }
}