import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get email(){
    return this.formValue.get('email'); 
  }

  get password(){
    return this.formValue.get('password'); 
  }

}