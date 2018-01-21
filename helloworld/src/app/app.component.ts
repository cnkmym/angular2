import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input1Value = 'input 1';
  input2Value = 'input 2';

  isInput1Hidden() {
    return this.input2Value !== 'show';
  }
}
