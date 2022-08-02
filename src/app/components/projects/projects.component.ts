import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Proyectos } from 'src/app/models/models.model';

import { ChangeStyleService } from 'src/app/services/change-style.service';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!:FormGroup;
  proModelObj:Proyectos = new Proyectos();
  proData!:any;

  data:boolean = false;
  
  constructor(private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder) { }

  public ngOnInit():void{
    this.formValue = this.formBuilder.group({
      tituloPro: [''],
      tipoPro: [''],
      periodoPro: [''],
      descripcionPro: ['']
    });
    
    
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

}
