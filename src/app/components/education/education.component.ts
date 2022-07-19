import { Component, OnInit, Input } from '@angular/core';

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

  data:boolean = false;
  
  //@Input() childMessage:boolean = false;
  

  constructor(private changeStyleService:ChangeStyleService) { }

  public ngOnInit():void{
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

}
