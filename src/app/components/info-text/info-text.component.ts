import { Component, OnInit, Input } from '@angular/core';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.css']
})
export class InfoTextComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  data:boolean = false;

  //@Input() childMessage:boolean = false;

  constructor(private changeStyleService:ChangeStyleService) { }

  public ngOnInit():void{
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

}
