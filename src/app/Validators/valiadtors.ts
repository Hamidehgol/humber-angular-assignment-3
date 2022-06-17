import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        
        const Numbers = control.value.match(/\d/g);
        if (Numbers) {
            return { WrongNumbers: true };
        } else if (control.value.includes(" ")) {
            return { spaces: true }
        } else if (!control.value) {
            return { empty: true }
        }

        return null; 
    };
}

export function numberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const Character = control.value.match(/^-?(0|[1-9]\d*)?$/);
        if (Character) {
            return { WrongCharacters: true };
        }else if (!control.value) {
            return { empty: true }
        }
        return null;
    };
}

