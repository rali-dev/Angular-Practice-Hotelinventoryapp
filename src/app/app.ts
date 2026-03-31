
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Parent } from './parent/parent';
@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, Rooms, NgSwitch, NgSwitchCase, NgSwitchDefault, Parent],
  templateUrl: './app.html',
  // template: `<h1>hello World :)</h1>
  // <p>Angular is ausome!</p>`,
  styleUrl: './app.scss'
  // styles: `
  //   h1 {
  //     color: blue;
  //   }
  // `
})
export class App {
  protected readonly title = signal('hotelinventoryapp');

  // role: string = 'admin';
}
