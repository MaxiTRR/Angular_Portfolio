import { Component, OnInit } from '@angular/core';
import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { InfoTextService } from 'src/app/services/info-text.service';

import { InfoPersonal } from 'src/app/models/models.model';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!: FormGroup;
  infoTextModelObj:InfoPersonal = new InfoPersonal();
  infoTextData!:any;

  data:boolean = false;
 
  constructor(private changeStyleService:ChangeStyleService, public api:InfoTextService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nombreInfo: [''],
      titulo: [''],
      descripcion: ['']
    })
    
    this.getAllInfoPersonal();

    //----------------------------------------------------------    
    //Metodo de prueba para la conexion con el backend (FUNCIONA-ACORDARSE DE ARREGLAR LO REFERIDO AL JSON SERVER)
    this.api.getInfoPersonalV2().subscribe(data => this.infoTextModelObj = data);
    //------------------------------------------------------------------

    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

  getAllInfoPersonal(){
    this.api.getInfoPersonal()
    .subscribe({
      next: (res)=>{
        this.infoTextData = res;
      }
    })
  }

}
