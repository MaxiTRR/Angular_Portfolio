import { Component, OnInit } from '@angular/core';
import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.css']
})
export class InfoTextComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  constructor() { }

  ngOnInit(): void {
  }

}
