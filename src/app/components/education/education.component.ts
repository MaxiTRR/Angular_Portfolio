import { Component, OnInit, Input } from '@angular/core';
import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;
  
  @Input() childMessage:boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
