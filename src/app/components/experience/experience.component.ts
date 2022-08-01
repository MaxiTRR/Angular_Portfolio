import { Component, OnInit } from '@angular/core';

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

  data:boolean = false;

  constructor( private changeStyleService:ChangeStyleService) { }

  ngOnInit(): void {

    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

}
