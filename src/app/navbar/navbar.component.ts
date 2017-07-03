import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GiphyService} from "../giphy-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selectedButton:string;
  currentPage:number = 0;

  // Queries: currentQuery come from the buttons(cats/dogs), input comes from the user input element
  currentQuery:string;
  inputQuery:string;

  @Output()
  gifsResponse:EventEmitter<any> = new EventEmitter();

  constructor(private giphyService:GiphyService) { }

  ngOnInit() {
  }

  // Checks the button input and sets the parameters for a query
  selectQuery(e){
    if(
      e.srcElement &&
      e.srcElement.innerText!='' &&
      e.srcElement.innerText!=this.currentQuery) {
        this.setQuery(e.srcElement.innerText,e.srcElement.id);
        this.searchGifs();
    }
  }

  // Checks the value inserted in the form and sets the parameters for a query
  selectInputQuery(){
    if(this.inputQuery!=null && this.inputQuery!=''){
      this.setQuery(this.inputQuery,'input-button');
      this.searchGifs();
    }
  }

  setQuery(query,button_id){
    this.currentQuery = query;
    this.selectedButton = button_id;
    this.currentPage = 0;
  }

  goToNextPage(){
      this.currentPage++;
      this.searchGifs();
  }

  goToPrevPage(){
    if(this.currentPage>0) {
      this.currentPage--;
      this.searchGifs();
    }
  }

  searchGifs(){
    this.giphyService.searchGifs(this.currentQuery, this.currentPage).subscribe(
      gifs => {
        this.gifsResponse.emit(gifs);
      },
      error => {
        this.gifsResponse.emit(error);
      }
    )
  }


}
