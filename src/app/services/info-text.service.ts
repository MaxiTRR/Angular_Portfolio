import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { InfoPersonal } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class InfoTextService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "http://localhost:8080/infoPersonal/";

  constructor(private http:HttpClient) { }

  postInfoPersonal(data:any){
    return this.http.post<any>("http://localhost:3000/infoPersonal", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getInfoPersonal(){
    return this.http.get<any>("http://localhost:3000/infoPersonal")
    .pipe(map((res:any) =>{
      return res;
    }))
  }




  //Metodo de prueba de GET datos desde el backend con Observable
  public getInfoPersonalV2():Observable<InfoPersonal>{
    return this.http.get<InfoPersonal>(this.url + 'traer/perfil');
  }





  updateInfoPersonal(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/infoPersonal"+id, data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteInfoPersonal(id:number){
    return this.http.delete<any>("http://localhost:3000/infoPersonal"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  
}
