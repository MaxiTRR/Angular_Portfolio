import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoComponent } from './components/info/info.component';
import { ImageProfileComponent } from './components/image-profile/image-profile.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExpInfoComponent } from './components/exp-info/exp-info.component';
import { EducationComponent } from './components/education/education.component';
import { EduCardComponent } from './components/edu-card/edu-card.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    ImageProfileComponent,
    InfoTextComponent,
    ExperienceComponent,
    ExpInfoComponent,
    EducationComponent,
    EduCardComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
