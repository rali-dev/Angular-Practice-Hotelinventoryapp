import { Component, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'hinv-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {

  public readonly parentMessage = signal<string>('');
  public readonly childData = signal<string>('');

  sendMessage(info: string){
    this.parentMessage.set(info);
  }
  receiveMessage(info: string){
    this.childData.set(info);
  }
}
