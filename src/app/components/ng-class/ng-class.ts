import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.css',
})
export class NgClass {

  divBgColor: string = 'btn btn-success';
  isChecked: boolean = false;
  div3ClassName: string = '';

  div1BgColorMethod(divColor: string) {
    this.divBgColor = divColor;
  }

}
