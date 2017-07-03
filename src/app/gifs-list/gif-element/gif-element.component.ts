import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-gif-element',
  templateUrl: './gif-element.component.html',
  styleUrls: ['./gif-element.component.css']
})

export class GifElementComponent implements OnInit {

  @Input()
  gifElem;

  @Output()
  info:EventEmitter<String>=new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  // When the gif is clicked, some informations about the gifs are emitted
  showInfo(){
    this.info.emit(this.gifElem.images.fixed_height);
  }


}
