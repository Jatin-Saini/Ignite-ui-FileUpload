import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgUploadComponent } from 'igniteui-angular-wrappers';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    IgUploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
