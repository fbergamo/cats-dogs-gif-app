import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.css']
})
export class GifsListComponent implements OnInit {
  @Input()
  gifResponse;



  gifInfo:string;

  getInfo(event){
    if(event!=null) {
      this.gifInfo = event;
    }
  }

  closeInfo(){
    this.gifInfo=null;
  }
  constructor() { }

  ngOnInit() {
  }

}
