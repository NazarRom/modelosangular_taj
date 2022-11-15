import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css']
})
export class HijodeporteComponent implements OnInit {
  @Input() sport!: string;
  //vamos a recibir un metodo del padre
  //mediante props
  @Output() seleccionarDeporte: EventEmitter<any> = new EventEmitter();
  constructor() { }
  seleccionarFavoritoHijo(): void {
    //cuando realicemos click en el hijo llamos al padre
    this.seleccionarDeporte.emit(this.sport)
  }
  ngOnInit(): void {
  }

}
