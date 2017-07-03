import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService{

  private giphyUrl:string = 'https://api.giphy.com/v1/gifs/search';
  private appId: string = 'APP_ID';
  private gifNum: string = '25';


  constructor(private http:Http){}

  public searchGifs(q:string, page?:number){

    // Offset are the number of gifs we want to have after the first page,
    // so it's calculated by multiplicand number of the page for the number of gif per pages;
    // Default is 0.
    let offset = 0;
    if(page!=null){
      offset = page * +this.gifNum;
    }

    let params ={
      'api_key': this.appId,
      'q': q,
      'limit':this.gifNum,
      'offset':offset
    };

    return this.http.get(this.giphyUrl, {params});
  }

}
