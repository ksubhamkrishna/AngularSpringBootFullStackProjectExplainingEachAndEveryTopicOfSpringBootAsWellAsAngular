import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.css',
})
export class LinkedSignal {

  firstName = signal("Subham")
  lastname = signal("Krishna");

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions, previous) => {
      const fullName = newOptions + " " + this.lastname()
      return fullName;
    }
  })

  changeName() {
    this.firstName.set("Rahul");
  }


  user = signal({ id: 111, name: "Subham" });

  email = linkedSignal({
    source: this.user,
    computation: user => `${user.name + user.id}@gmail.com`,
    equal: (a: any, b: any) => a.id !== b.id
  })

  changeId() {
    this.user.set({ id: 123, name: "Subham" });
  }

}
