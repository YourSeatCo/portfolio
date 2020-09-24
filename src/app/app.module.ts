import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { CaseStudy1Component } from './case-study1/case-study1.component';
import { CaseStudy2Component } from './case-study2/case-study2.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CaseStudy1Component,
    CaseStudy2Component,
    SliderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
