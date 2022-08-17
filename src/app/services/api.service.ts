import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SkillModel } from '../components/skills/skills.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "http://localhost:8080/skill/";




  // ESTE SERVICE ES EL ESPECIFICO PARA SKILLS!!!! (CAMBIAR NOMBRE)

  constructor( private http:HttpClient) { }

  postSkill(data:any){
    return this.http.post<any>("http://localhost:3000/skills", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getSkill(){
    return this.http.get<any>("http://localhost:3000/skills")
    .pipe(map((res:any) =>{
      return res;
    }))
  }


   //Metodo de prueba de GET datos desde el backend con Observable
   public getSkillV2():Observable<SkillModel>{
    return this.http.get<SkillModel>(this.url + 'traer');
  }




  updateSkill(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/skills"+id, data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteSkill(id:number){
    return this.http.delete<any>("http://localhost:3000/skills"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
}
