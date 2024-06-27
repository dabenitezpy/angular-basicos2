import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero?: string

  public heroName: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Pepito', 'Chapulin', 'Jaimito']

  removeLastHero():void {
    this.deletedHero = this.heroName.pop()

  }

}
