import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
    selector: '[appMydirective]'   
})
export class MydirectiveDirective 
{
    @Input() frmCtrl : FormControl | any;
  @Input() maxChars=4;
  @HostListener('input') onKeyUp()
    {
        const  frmvalue:string =this.frmCtrl.value;
        if(frmvalue.length > this.maxChars)
        {
        const fnlValue=frmvalue.substring(0,this.maxChars);
        this.frmCtrl.setValue(fnlValue);
        }
    }

   

    constructor(private el:ElementRef,private renderer:Renderer2) { }
}

