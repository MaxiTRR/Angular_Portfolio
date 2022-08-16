import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue!:FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticationService:AutenticationService, private ruta:Router) { }

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

  onEnviar(event:Event){
    event.preventDefault;
    this.autenticationService.iniciarSesion(this.formValue.value)
    .subscribe(data =>{
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }

}
