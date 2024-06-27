import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public chanName: boolean = false
  public chanAge: boolean = false
  public otherName2: string = 'ironman'
  public otherAge2: number = 45

  public name: string = this.otherName2
  public otherName: string = 'Marcopolo'
  public age: number = this.otherAge2
  public otherAge: number = 250

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescripcion():string {
    return `${ this.name } - ${ this.age }`
  }

  changeName():void {
    if(this.chanName){
      this.name = this.otherName2
      this.chanName = false
    }else {
      this.name = this.otherName
      this.chanName = true
    }

  }

  changeAge():void {
    if(this.chanAge){
      this.age = this.otherAge2
      this.chanAge = false
    }else {
      this.age = this.otherAge
      this.chanAge = true
    }
  }

}
