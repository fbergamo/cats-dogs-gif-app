import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gifResponse:Response;

  // This function is needed to pass the gifResponse information from NavbarComponent to GifsListComponent
  getGifResponse(e){
    this.gifResponse = e;
  }
}
