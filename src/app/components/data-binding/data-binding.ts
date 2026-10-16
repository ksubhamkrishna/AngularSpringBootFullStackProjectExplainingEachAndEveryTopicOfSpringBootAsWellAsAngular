import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

firstName : string = "Subham";
rollNo: number = 121;
isActive:boolean=true;
currentDate: Date = new Date();
myPlaceHolder : string ="Enter Full Name";
div1ClassName:string="bg-primary";
selectedCity: string = "";

constructor(private router:Router){
  console.log(this.firstName);

  this.isActive=false;
  console.log(this.isActive);
  //this.showWelcomeMessage();
}

showWelcomeMessage(){
  alert("Welcome to Angular 19 tutorial");
}

onCityChanges(){
  console.log("City Changed");
}

navigatetoAdmin(){
this.router.navigateByUrl("/admin")
}

}
