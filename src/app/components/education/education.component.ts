import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Educacion } from 'src/app/models/models.model';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!:FormGroup;
  eduModelObj:Educacion = new Educacion();
  eduData!:any;

  data:boolean = false;
  
  constructor(private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder) { }

  public ngOnInit():void{
    this.formValue = this.formBuilder.group({
      nombreInst: [''],
      periodoEdu: [''],
      tituloEdu: [''],
      descripcionEdu: ['']
    });


    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

}
