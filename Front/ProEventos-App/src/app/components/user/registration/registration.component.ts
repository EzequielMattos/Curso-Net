import { ValidatorField } from './../../../helpers/ValidatorField';
import { AbstractControl, AbstractControlOptions } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  get f(): any{
    return this.form.controls;
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.validation();
  }
 
  public validation(): void{

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confSenha')
    }

    this.form = this.fb.group({
      primeiroNome : ['', Validators.required],  
      ultimoNome : ['', Validators.required],        
      username : ['', Validators.required],  
      senha : ['', [Validators.required, Validators.minLength(6)]], 
      confSenha : ['', Validators.required],   
      email : ['', [Validators.required, Validators.email]],  
    }, formOptions);
  }
}
