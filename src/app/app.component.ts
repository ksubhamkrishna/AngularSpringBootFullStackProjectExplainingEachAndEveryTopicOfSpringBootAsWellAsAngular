import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { DataBinding } from './components/data-binding/data-binding';
// import { NgIfComponent } from './components/ng-if/ng-if';
// import { NgForComponent } from './components/ng-for/ng-for';
// import { NgClass } from './components/ng-class/ng-class';
// import { NgStyleComponent } from './components/ng-style/ng-style';
// import { ControlStatement } from './components/control-statement/control-statement';
// import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],//[DataBinding, NgIfComponent, NgForComponent, NgClass, NgStyleComponent, ControlStatement,FormAndValidation],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class App {
}
