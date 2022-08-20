import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtDto, LoginUsuario, NuevoUsuario } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  authURL = "http://localhost:8080/auth";
  
  constructor(private http:HttpClient) {}

  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.http.post<any>(this.authURL + '/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
    return this.http.post<JwtDto>(this.authURL + '/login', loginUsuario);
  }
}
