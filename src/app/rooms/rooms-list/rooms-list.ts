import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, NgClass, NgFor, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms.interface';

@Component({
  selector: 'hinv-rooms-list',
  imports: [NgFor, NgClass,DatePipe, PercentPipe, CurrencyPipe, TitleCasePipe, UpperCasePipe, JsonPipe, SlicePipe, DecimalPipe],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.scss',
})
export class RoomsList {
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
