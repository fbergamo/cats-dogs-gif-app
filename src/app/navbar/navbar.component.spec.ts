import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {GiphyService} from "../giphy-service";
import {By} from "@angular/platform-browser";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        FormsModule,HttpModule
      ],
      providers: [ GiphyService]
    }).compileComponents();


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('should be show correct input button label', () => {
    let de = fixture.debugElement.query(By.css('#input-button')).nativeElement;
    expect(de.textContent).toBe('Enter');
  });

  it('should be show correct cats button label', () => {
    let de = fixture.debugElement.query(By.css('#cats-button')).nativeElement;
    expect(de.textContent).toBe('CATS');
  });

  it('should be show correct dogs button label', () => {
    let de = fixture.debugElement.query(By.css('#dogs-button')).nativeElement;
    expect(de.textContent).toBe('DOGS');
  });

  it('should be show correct heading label', () => {
    let de = fixture.debugElement.query(By.css('#navbar-h1')).nativeElement;
    expect(de.textContent).toBe('Choose your gifs...');
  });

  it('should be show correct next page number', () => {
    let gifService = fixture.debugElement.injector.get(GiphyService);
    let spy = spyOn(gifService, 'searchGifs').and.returnValue(Observable.of({}))
    component.goToNextPage();
    fixture.detectChanges();
    expect(component.currentPage).toBe(1);
  });

  it('should be show correct prev page number if page equals zero', () => {
    let gifService = fixture.debugElement.injector.get(GiphyService);
    let spy = spyOn(gifService, 'searchGifs').and.returnValue(Observable.of({}))
    component.goToPrevPage();
    fixture.detectChanges();
    expect(component.currentPage).toBe(0);
  });

  it('should be show correct prev page number', () => {
    let gifService = fixture.debugElement.injector.get(GiphyService);
    let spy = spyOn(gifService, 'searchGifs').and.returnValue(Observable.of({}))
    component.currentPage = 2;
    component.goToPrevPage();
    fixture.detectChanges();
    expect(component.currentPage).toBe(1);
  });

  it('should not call the service if there are no inputs', () => {
    let gifService = fixture.debugElement.injector.get(GiphyService);
    let spy = spyOn(gifService, 'searchGifs').and.returnValue(Observable.of({}))
    component.inputQuery = '';
    component.selectInputQuery();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should call the service if there are input', () => {
    let gifService = fixture.debugElement.injector.get(GiphyService);
    let spy = spyOn(gifService, 'searchGifs').and.returnValue(Observable.of({}))
    component.inputQuery = 'testing!';
    component.selectInputQuery();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  });

});
