import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './resgister-page.component.html',
  styleUrl: './resgister-page.component.css'
})
export class ResgisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required],[]],
    email: ['', [Validators.required, Validators.email],[new EmailValidator]],
    username: ['', [Validators.required, customValidators.cantBeStrider],[]],
    password: ['', [Validators.required, Validators.minLength(6)],[]],
    checkPassword: ['', [Validators.required],[]],
  }, {
    //este segundo objeto valida el form a nivel general, a diferencia de los validadores del anterior objeto
    //que valida a nivel de campo
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'checkPassword')
    ]
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
  ) {

  }

  isValidField (field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
