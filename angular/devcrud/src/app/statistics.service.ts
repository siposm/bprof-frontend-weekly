import { Injectable } from '@angular/core';
import { Developer } from './developer';

@Injectable()
export class StatisticsService {

  developers: Developer[] = []
  
  constructor() {
    this.load()
  }
  
  load(): void {
    let data = JSON.parse(localStorage.getItem("bprof_devs") ?? "[]")
    Object.values(data).map(x => this.developers.push(Object.assign(new Developer(), x)))
  }

  averageSalary(): number {
    let sum = this.developers.map(x => x.salary).reduce((a, b) => a! + b!)!
    let avgSalary = Math.round(sum! / this.developers.length)
    return avgSalary
  }

  oldestDeveloper(): Developer {
    return this.developers.reduce((a, b) => a.age! < b.age! ? b : a)
  }

  highestEarningdeveloper(): Developer {
    return this.developers.reduce((a, b) => a.salary! < b.salary! ? b : a)
  }

  lowestEarningDeveloper(): Developer {
    return this.developers.reduce((a, b) => a.salary! < b.salary! ? a : b)
  }

  mostSkilledDeveloper(): Developer {
    return [...this.developers].sort((a, b) => b.skills.length - a.skills.length)[0]
  }

  getAllSkills(): string[] {
    return Array.from(new Set(this.developers.map(x => x.skills).flat().sort()))
  }
}
