import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { AppComponent } from './app.component';
import { BabyPredictionComponent } from './baby-prediction/baby-prediction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BabyPredictionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
