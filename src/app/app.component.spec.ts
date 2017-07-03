import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {GifElementComponent} from "./gifs-list/gif-element/gif-element.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {GifsListComponent} from "./gifs-list/gifs-list.component";
import {GiphyService} from "./giphy-service";

describe('AppComponent', () => {
  var giphyServiceStub = {
    searchGifs(q:string, page?:number){}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, GifElementComponent, NavbarComponent, GifsListComponent
      ],
      imports: [
        FormsModule,HttpModule
      ],
      providers: [
        {provide:GiphyService, useValue:giphyServiceStub}
      ]
    }).compileComponents();

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
