import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `],
  directives: [CounterComponent],
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  myCount: number = 13;
  countChange(event) {
    this.myCount = event;
    console.log(event);
  }
}