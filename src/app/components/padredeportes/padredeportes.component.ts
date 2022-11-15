import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent implements OnInit {
  public deportes: Array<string>;
  public mensaje!: string;
  constructor() {
    this.deportes = ["Fútbol", "Golf", "Baloncesto", "Padel", "Natación"];
  }

  seleccionarDeportePadre(event: any): void {
    console.log(event);
    this.mensaje = "Deporte Seleccionado  " + event;
  }

  ngOnInit(): void {
  }

}
