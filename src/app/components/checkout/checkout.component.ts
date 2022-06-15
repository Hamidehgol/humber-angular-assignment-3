import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, FormArray } from '@angular/forms'
import { Observable, Subscription } from 'rxjs';
import { ProductData } from 'src/app/models/product.interface';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  myForm!: FormGroup;
  subscription!: Subscription;
  x : any;
  Component1Data: any = '';
  
  constructor(private fb: FormBuilder,private dataStore: DataStoreService) {
   
   this.createForm();

}

calculateTotal():number{
  let rows = this.myForm.get('rows') as FormArray;
  let gdTotal=0;
  
 return rows.controls.
    map((row)=> gdTotal+ row.get('price')?.value). //calcualte each amount
     reduce((sum,amount) => sum + amount,0); //find sum
     
}


  createForm() {
   this.myForm = this.fb.group({
    rows: this.fb.array([]),
    firstname:[null, [Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
    lastname:[null, [Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
    address:[],
    city:[null, [Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
    postalcode:[],
    country:[null, [Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
    card:[],
    cardnumber:[null, [Validators.required, Validators.pattern("^[0-9]{1,16}$")]],
    nameoncard:[],
    expiry:[],
      cvc: [null, [Validators.required, Validators.pattern("^[0-9]{1,4}$")]],
      grand_total:[]
   });
 }


onSubmit(form: NgForm) {
  this.subscription =  this.dataStore.cartItems$.subscribe(x=>console.log(x));
  console.log(form);
 
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
