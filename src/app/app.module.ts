import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroBannerComponent } from './pages/home/sections/hero-banner/hero-banner.component';
import { AboutMeComponent } from './pages/home/sections/about-me/about-me.component';
import { WorkExperienceComponent } from './pages/home/sections/work-experience/work-experience.component';
import { ExperiencesComponent } from './pages/home/sections/work-experience/components/experiences/experiences.component';
import { TechnicalSkillsComponent } from './pages/home/sections/technical-skills/technical-skills.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroBannerComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    ExperiencesComponent,
    TechnicalSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
