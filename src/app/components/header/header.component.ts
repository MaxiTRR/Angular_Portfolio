import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

  @Output() darkMode = new EventEmitter<boolean>();
  setDark = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendClickEvent(){
    this.setDark = !this.setDark;
    this.darkMode.emit(this.setDark);
  }

}
