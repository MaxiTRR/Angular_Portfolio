import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "http://localhost:8080/project/";


  constructor(private http:HttpClient) { }

  postProject(data:any){
    return this.http.post<any>("http://localhost:3000/proyectos", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getProject(){
    return this.http.get<any>("http://localhost:3000/proyectos")
    .pipe(map((res:any) =>{
      return res;
    }))
  }


  //Metodo de prueba de GET datos desde el backend con Observable
  public getProjectV2():Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url + 'traer');
  }




  updateProject(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/proyectos"+id, data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteProject(id:number){
    return this.http.delete<any>("http://localhost:3000/proyectos"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

}
