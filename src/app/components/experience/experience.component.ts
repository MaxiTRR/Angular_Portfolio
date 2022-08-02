import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Exp } from 'src/app/models/models.model';

import { ChangeStyleService } from 'src/app/services/change-style.service';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!:FormGroup;
  expModelObj:Exp = new Exp();
  expData:any;

  data:boolean = false;

  constructor( private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      lugar: [''],
      periodo: [''],
      area: [''],
      rol: ['']
    });

    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

}
