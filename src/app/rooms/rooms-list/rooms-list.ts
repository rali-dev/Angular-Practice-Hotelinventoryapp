import { CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgFor, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms.interface';

@Component({
  selector: 'hinv-rooms-list',
  imports: [NgFor, NgClass,DatePipe, PercentPipe, CurrencyPipe, TitleCasePipe, UpperCasePipe, DecimalPipe],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsList implements OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Handle changes to input properties if needed
    console.log(changes)
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
}
