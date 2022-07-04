import { Component, OnInit, Input } from '@angular/core';

import { Skill } from '../../interfaces/Skill'

import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { SkillModel } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!:FormGroup;
  skillModelObj:SkillModel = new SkillModel();
  skillData!:any;

  
  @Input() childMessage:boolean = false;

  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nombre : [''],
      nivel : []
    })

    this.getAllSkill();
  }

  postSkillDetails(){
    this.skillModelObj.nombre = this.formValue.value.nombre;
    this.skillModelObj.nivel = this.formValue.value.nivel;

    this.api.postSkill(this.skillModelObj)
    .subscribe({next: (res) =>{ 
      console.log(res);
      alert("Skill agregada exitosamente!");
      let ref = document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      this.getAllSkill();
    },
      error: (err) =>{
      alert("Algo salio mal!")
      }
    })
  }

  getAllSkill(){
    this.api.getSkill()
    .subscribe({next: (res)=>{
      this.skillData = res;
      }
    })
  }

}
