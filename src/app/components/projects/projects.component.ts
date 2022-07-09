import { Component, OnInit, Input } from '@angular/core';

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
  
  @Input() childMessage:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
