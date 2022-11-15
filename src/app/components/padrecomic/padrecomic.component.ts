import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-padrecomic',
  templateUrl: './padrecomic.component.html',
  styleUrls: ['./padrecomic.component.css']
})
export class PadrecomicComponent implements OnInit {
  @ViewChild("cajatitulo") cajatitulo!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;
  @ViewChild("cajadesc") cajadesc!: ElementRef;
  public comic!: any;
  public comics: Array<Comic>;
  public favorito!:Comic;
  constructor() {
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new Comic(
        "Avengers",
        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
        "Los Vengadores"
      ),
      new Comic(
        "Spawn",
        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
        "Todd MacFarlane"
      )
    ];
  }
  insertarComic(): void {
    var titulo = this.cajatitulo.nativeElement.value;
    var img = this.cajaimagen.nativeElement.value;
    var desc = this.cajadesc.nativeElement.value;
    this.comic = new Comic(titulo, img, desc);
    this.comics.push(this.comic)
    console.log(this.comic)
  }
  seleccionarComicPadre(event:any):void {
    this.favorito = event;
  }
  ngOnInit(): void {
  }

}
