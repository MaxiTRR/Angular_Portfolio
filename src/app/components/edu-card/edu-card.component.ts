import { Component, OnInit, Input } from '@angular/core';
import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edu-card',
  templateUrl: './edu-card.component.html',
  styleUrls: ['./edu-card.component.css']
})
export class EduCardComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  @Input() childMessage:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
