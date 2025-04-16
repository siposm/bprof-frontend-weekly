import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
  myNumber: number = 0
  counter: number = 200
  increments: number[] = []

  constructor() {
    // this.increments.push(20)
    // this.increments.push(40)
    // this.increments.push(22)

    let u: User = new User()
    u.name = "gipsz jakab"
  }

  classSelector(item: number): string {
    if (item > 30) {
      return "bigger"
    }
    return "smaller"
  }

  add(): void {
    this.increments.push(this.myNumber)
    this.counter += this.myNumber
    this.myNumber = 0
  }

  up(): void {
    this.counter++
  }

  down(): void {
    this.counter--
  }
}

export class User {
  name: string = ""
}