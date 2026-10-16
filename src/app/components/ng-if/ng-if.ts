import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIfComponent {

  div1Visible: boolean = true;

  number1: string = '';
  number2: string = '';

  hideDiv1() {
    this.div1Visible = false;
  }

  showDiv1() {
    this.div1Visible = true;
  }

}
