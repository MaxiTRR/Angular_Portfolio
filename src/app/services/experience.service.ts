import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Exp } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "http://localhost:8080/experience/";

  constructor(private http:HttpClient) { }

  postExperience(data:any){
    return this.http.post<any>("http://localhost:3000/exp", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getExperience(){
    return this.http.get<any>("http://localhost:3000/exp")
    .pipe(map((res:any) =>{
      return res;
    }))
  }





   //Metodo de prueba de GET datos desde el backend con Observable
   public getExperienceV2():Observable<Exp>{
    return this.http.get<Exp>(this.url + 'traer');
  }





  updateExperience(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/exp"+id, data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteExperience(id:number){
    return this.http.delete<any>("http://localhost:3000/exp"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  
}
