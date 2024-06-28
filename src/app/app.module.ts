// Import angular file
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FitnessComponent } from './fitness/fitness.component';

// Create angular module 
@NgModule({
  declarations: [
    AppComponent,
    FitnessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// Export app module
export class AppModule { }