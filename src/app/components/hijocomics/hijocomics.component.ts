import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';
@Component({
  selector: 'app-hijocomics',
  templateUrl: './hijocomics.component.html',
  styleUrls: ['./hijocomics.component.css']
})
export class HijocomicsComponent implements OnInit {


@Input() revista!:Comic;

@Output() seleccionarComic: EventEmitter<any> = new EventEmitter();
  constructor() {}
  seleccionarComicHijo(): void {
    //cuando realicemos click en el hijo llamos al padre
    this.seleccionarComic.emit(this.revista)
  }

  ngOnInit(): void {
    

  }

}
