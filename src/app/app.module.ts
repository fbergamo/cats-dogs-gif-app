import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GifsListComponent } from './gifs-list/gifs-list.component';
import {GiphyService} from "./giphy-service";
import {HttpModule} from "@angular/http";
import {GifElementComponent } from './gifs-list/gif-element/gif-element.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GifsListComponent,
    GifElementComponent,
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
