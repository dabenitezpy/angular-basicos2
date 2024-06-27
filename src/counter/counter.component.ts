import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <h2>Esto es el modulo COUNTER</h2>
    <p>
      Contador actual: {{ counter }}
    </p>

    <button (click)="increaseBy(1)" >+ 1</button>
    <button (click)="reset()" >Reset</button>
    <button (click)="increaseBy(-1)" >- 1</button>
  `,
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public counter: number = 10;

  public increaseBy( value: number ): void{
    this.counter += value

  }

  public reset(){
    this.counter = 10
  }

}
