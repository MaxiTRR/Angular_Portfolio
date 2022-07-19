import { Component, OnInit, Input } from '@angular/core';

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

  data:boolean = false;
  
 //@Input() childMessage:boolean = false;

  constructor(private changeStyleService:ChangeStyleService) { }

  public ngOnInit():void{
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

}
