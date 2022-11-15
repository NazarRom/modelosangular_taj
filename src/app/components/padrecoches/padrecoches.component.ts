import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';
@Component({
  selector: 'app-padrecoches',
  templateUrl: './padrecoches.component.html',
  styleUrls: ['./padrecoches.component.css']
})
export class PadrecochesComponent implements OnInit {
  public coches: Array<Coche>;
  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 20, false),
      new Coche("Volkswagen", "EScarabajo", 0, 2, false),
      new Coche("Lamborghini", "Diablo", 0, 30, false)
    ];
  }
  ngOnInit(): void {
  }

}
