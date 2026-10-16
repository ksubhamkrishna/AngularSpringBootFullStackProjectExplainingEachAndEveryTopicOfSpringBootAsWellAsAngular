import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  firstName = signal("Kumar");

  lastName = signal<string>("Subham");

  courseName: string = "Angular";
  // Signals are accessed as a method

  rollNo = signal<number>(0);

  constructor() {
    const value = this.firstName();
    setTimeout(() => {
      this.courseName = "React Js";
      this.firstName.set("Rahul");
    }, 5000);
  }

  onIncrement() {
    this.rollNo.update(oldValue => oldValue + 1)
  }
}
