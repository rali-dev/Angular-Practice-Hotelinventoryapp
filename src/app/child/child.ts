import { Component, input, output } from '@angular/core';

@Component({
  selector: 'hinv-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  public readonly parentData = input<string>('');
  public readonly childMessage = output<string>();

  sendMsg(info: string){
    this.childMessage.emit(info);
  }
}
