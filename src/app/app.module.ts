import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {NgxPhotoswipeModule} from '@fnxone/ngx-photoswipe'

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxPhotoswipeModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
