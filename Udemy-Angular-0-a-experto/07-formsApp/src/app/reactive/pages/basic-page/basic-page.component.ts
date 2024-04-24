import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], []),
  // })

 //equivale al comentario (los [] son validaciones síncronas y asíncronas respectivamente)
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    price: [0, [Validators.required, Validators.min(0)], []],
    inStorage: [0, [Validators.required, Validators.min(0)], []],
  })

  constructor (private fb: FormBuilder){

  }

  onSave():void {

    if(this.myForm.invalid) return;

    console.log(this.myForm.value);

  }

}
