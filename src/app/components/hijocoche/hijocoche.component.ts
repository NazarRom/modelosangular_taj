import { Component, OnInit, Input } from '@angular/core';
import { Coche } from 'src/app/models/coche';
@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css']
})
export class HijococheComponent implements OnInit {

  @Input() car!: Coche;
  public mensaje!: string;

  constructor() {
    //cunado recibimos onjetos input, no podemos utilizarlos en el constructor
  }
  ngOnInit(): void {
    this.comprobarEsrtado();
  }
  comprobarEsrtado(): boolean {
    if (this.car.estado == false) {
      this.mensaje = "El coche está apagado";
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = "El coche está prendido"
      return true;
    }
  }

  encenderCoche(): void {
    this.car.estado = !this.car.estado;
    this.comprobarEsrtado();
  }
  acelerarCoche(): void {
    if (this.comprobarEsrtado() == false) {
      alert("Donde vas??? El coche está apagado");
    } else {
      if (this.car.velocidad < 300) {
        this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      } else {
        alert("muy rapido manin")
      }

    }
  }

 

}
