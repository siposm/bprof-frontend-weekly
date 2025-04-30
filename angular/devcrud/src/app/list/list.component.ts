import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {

  developers: Developer[] = []

  constructor(private router: Router) {
    this.load()
  }

  remove(developer: Developer): void {
    this.developers = this.developers.filter(x => x.id != developer.id)
    this.save()
  }

  edit(developer: Developer): void {
    this.router.navigate(["/edit/" + developer.id])
  }

  load(): void {
    let data = JSON.parse(localStorage.getItem("bprof_devs") ?? "[]")
    Object.values(data).map(x => this.developers.push(Object.assign(new Developer(), x)))

    // data.map((element: any) => {
    //   this.developers.push(Object.assign(new Developer(), element))
    // })
  }

  save(): void {
    localStorage.setItem("bprof_devs", JSON.stringify(this.developers))
  }

  seed(): void {
    let d1 = new Developer()
    d1.id = "b8878c6c-eda2-35ee-f621-91f9b7af14dc"
    d1.name = "Dr. Kiss Lajos"
    d1.email = "KissLajos@greenwave.hu"
    d1.job = "UI/UX Designer"
    d1.age = 40
    d1.salary = 350000
    d1.image = "https://randomuser.me/api/portraits/men/1.jpg"
    this.developers.push(d1)

    let d2 = new Developer()
    d2.id = "a49335ca-d76a-02d1-2a6c-fdab1a3f8c0a"
    d2.name = "Tony Stark"
    d2.email = "mrstark@starkindustries.com"
    d2.job = "Frontend Developer"
    d2.age = 23
    d2.salary = 2500000
    d2.image = "https://randomuser.me/api/portraits/men/2.jpg"
    this.developers.push(d2)

    let d3 = new Developer()
    d3.id = "d255b2e3-9fde-c833-1cda-fa9ee62e851c"
    d3.name = "John Doe"
    d3.email = "JohnDoe@greenwave.hu"
    d3.job = "Frontend Developer"
    d3.age = 35
    d3.salary = 1556000
    d3.image = "https://randomuser.me/api/portraits/men/3.jpg"
    this.developers.push(d3)

    let d4 = new Developer()
    d4.id = "20ef4e13-94db-8a96-ca02-4f65a2a545d2"
    d4.name = "Robert Smith"
    d4.email = "RobertSmith@greenwave.hu"
    d4.job = "Fullstack Developer"
    d4.age = 40
    d4.salary = 999000
    d4.image = "https://randomuser.me/api/portraits/men/4.jpg"
    this.developers.push(d4)

    let d5 = new Developer()
    d5.id = "e31bc524-918f-a7dc-6b36-0be9c7181a11"
    d5.name = "James Alexander Mitchell"
    d5.email = "jam@alphatech.com"
    d5.job = "Backend Developer"
    d5.age = 30
    d5.salary = 406000
    d5.image = "https://randomuser.me/api/portraits/men/5.jpg"
    this.developers.push(d5)

    let d6 = new Developer()
    d6.id = "fbdc476a-eedf-de7e-bac6-2563dd40b0ab"
    d6.name = "Rose Parker"
    d6.email = "RoseParker@alphatech.com"
    d6.job = "Frontend Developer"
    d6.age = 40
    d6.salary = 250000
    d6.image = "https://randomuser.me/api/portraits/women/6.jpg"
    this.developers.push(d6)

    let d7 = new Developer()
    d7.id = "575bc89b-907f-3410-0fd2-cc119004b7ed"
    d7.name = "Sophia Grace"
    d7.email = "SophiaGrace@alphatech.com"
    d7.job = "Backend Developer"
    d7.age = 60
    d7.salary = 345000
    d7.image = "https://randomuser.me/api/portraits/women/7.jpg"
    this.developers.push(d7)

    let d8 = new Developer()
    d8.id = "b83254e1-8893-666a-1185-17cfab8d9a5c"
    d8.name = "Kovács András"
    d8.email = "KovacsAndras@alphatech.com"
    d8.job = "Architect"
    d8.age = 34
    d8.salary = 1500000
    d8.image = "https://randomuser.me/api/portraits/men/8.jpg"
    this.developers.push(d8)

    let d9 = new Developer()
    d9.id = "c9878a6c-7ba3-45ee-f619-91f9a7ef23dc"
    d9.name = "Egres Kata"
    d9.email = "EgresKata@starsolutions.net"
    d9.job = "Data Scientist"
    d9.age = 28
    d9.salary = 520000
    d9.image = "https://randomuser.me/api/portraits/women/9.jpg"
    this.developers.push(d9)

    let d10 = new Developer()
    d10.id = "d49337ca-d78a-12e1-3a5d-fdab2b3f9d2a"
    d10.name = "Nagy Péter"
    d10.email = "NagyPeter@starsolutions.net"
    d10.job = "DevOps Engineer"
    d10.age = 42
    d10.salary = 620000
    d10.image = "https://randomuser.me/api/portraits/men/10.jpg"
    this.developers.push(d10)

    let d11 = new Developer()
    d11.id = "e255a2b3-9fde-d833-1dfa-fa9fe62e85fc"
    d11.name = "Linda Parker"
    d11.email = "LindaParker@starsolutions.net"
    d11.job = "Project Manager"
    d11.age = 37
    d11.salary = 460000
    d11.image = "https://randomuser.me/api/portraits/women/11.jpg"
    this.developers.push(d11)

    let d12 = new Developer()
    d12.id = "f0ef5e14-93db-7c96-da32-4e65b2a655d2"
    d12.name = "Thomas Evans"
    d12.email = "ThomasEvans@starsolutions.net"
    d12.job = "Machine Learning Engineer"
    d12.age = 31
    d12.salary = 730000
    d12.image = "https://randomuser.me/api/portraits/men/12.jpg"
    this.developers.push(d12)

    let d13 = new Developer()
    d13.id = "g41bc623-818f-b8dc-5b26-0af8c5184a12"
    d13.name = "Anna Scott"
    d13.email = "AnnaScott@starsolutions.net"
    d13.job = "Security Analyst"
    d13.age = 29
    d13.salary = 395000
    d13.image = "https://randomuser.me/api/portraits/women/13.jpg"
    this.developers.push(d13)

    let d14 = new Developer()
    d14.id = "h3dc376b-f8df-ce7e-ba76-2574dd30b0ab"
    d14.name = "Emily White"
    d14.email = "EmilyWhite@starsolutions.net"
    d14.job = "Software Tester"
    d14.age = 34
    d14.salary = 410000
    d14.image = "https://randomuser.me/api/portraits/women/14.jpg"
    this.developers.push(d14)

    let d15 = new Developer()
    d15.id = "i28bc12d-5c93-1b56-3d91-754fe2d8a2b1"
    d15.name = "Márton István"
    d15.email = "MartonIstvan@techsphere.net"
    d15.job = "Cloud Solutions Architect"
    d15.age = 45
    d15.salary = 750000
    d15.image = "https://randomuser.me/api/portraits/men/15.jpg"
    this.developers.push(d15)

    let d16 = new Developer()
    d16.id = "j7f32f1b-4d7a-8b94-8e41-dc93e76b4c71"
    d16.name = "Balázs Zoltán"
    d16.email = "BalazsZoltan@techsphere.net"
    d16.job = "Data Scientist"
    d16.age = 39
    d16.salary = 680000
    d16.image = "https://randomuser.me/api/portraits/men/16.jpg"
    this.developers.push(d16)

    let d17 = new Developer()
    d17.id = "k8fc3d2a-6e39-4d9f-9b11-579fbb64b701"
    d17.name = "Bartos Gábor"
    d17.email = "BartosGabor@techsphere.net"
    d17.job = "Security Analyst"
    d17.age = 33
    d17.salary = 400000
    d17.image = "https://randomuser.me/api/portraits/men/20.jpg"
    this.developers.push(d17)

  }
}
