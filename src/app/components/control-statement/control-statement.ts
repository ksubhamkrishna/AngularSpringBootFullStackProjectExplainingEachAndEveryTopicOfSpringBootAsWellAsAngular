import { Component } from '@angular/core';


@Component({
  selector: 'app-control-statement',
  imports: [],
  templateUrl: './control-statement.html',
  styleUrl: './control-statement.css',
})
export class ControlStatement {

  div1Visible: boolean = false;

  showDiv1(divColor: boolean) {
    this.div1Visible = divColor;
  }

}
