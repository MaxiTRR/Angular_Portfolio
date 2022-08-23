import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Skill } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //Variable para la prueba de obtencion de datos del Backend JAVA
  url = "http://localhost:8080/skill/";

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


  //---------------------------------------------------------------------------
  //Metodo de prueba de GET datos desde el backend con Observable
 
  public lista(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url + 'lista');
  }

  public detail(id:number): Observable<Skill>{
    return this.http.get<Skill>(this.url + `detail/${id}`);
  }

  public save(skill:Skill):Observable<any>{
    return this.http.post<any>(this.url + 'create', skill);
  }

  public update(id:number, skill:Skill):Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, skill);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

  //--------------------------------------------------------------------------------




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
