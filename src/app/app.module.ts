import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DpDatePickerModule} from 'ng2-date-picker';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	FormsModule,
	DpDatePickerModule,
    BrowserModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
