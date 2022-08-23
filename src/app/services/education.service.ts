import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Educacion } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "http://localhost:8080/education/";

  constructor(private http:HttpClient) { }

  postEducation(data:any){
    return this.http.post<any>("http://localhost:3000/educacion", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getEducation(){
    return this.http.get<any>("http://localhost:3000/educacion")
    .pipe(map((res:any) =>{
      return res;
    }))
  }


  //---------------------------------------------------------------------------
  //Metodo de prueba de GET datos desde el backend con Observable
  //public getExperienceV2():Observable<Exp>{
  //return this.http.get<Exp>(this.url + 'traer');
  //}

  public lista(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `detail/${id}`);
  }

  public save(education:Educacion):Observable<any>{
    return this.http.post<any>(this.url + 'create', education);
  }

  public update(id:number, education:Educacion):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, education);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

  //--------------------------------------------------------------------------------





  updateEducation(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/educacion"+id, data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteEducacion(id:number){
    return this.http.delete<any>("http://localhost:3000/educacion"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

}
