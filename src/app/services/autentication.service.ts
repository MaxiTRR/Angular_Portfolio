import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  url = "http://localhost:3000/cuenta";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    console.log("Elservicio de autenticacion esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(
      sessionStorage.getItem('currentUser') || '{}'))
   }

   iniciarSesion(credenciales:any): Observable<any>{
    return this.http.post(this.url, credenciales).pipe(
      map(data =>{
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    )
   }

   get usuarioAutenticado(){
    return this.currentUserSubject.value;
   }
}