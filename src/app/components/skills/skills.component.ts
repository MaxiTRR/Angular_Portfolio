import { Component, OnInit, Input } from '@angular/core';
import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  @Input() childMessage:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
