import { Component, OnInit } from '@angular/core';

import { Room, RoomList } from './rooms.interface';
import {  JsonPipe, NgIf,NgStyle} from '@angular/common';
import { RoomsList } from './rooms-list/rooms-list';

@Component({
  selector: 'hinv-rooms',
  imports: [NgIf, NgStyle, RoomsList, JsonPipe],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})

export class Rooms implements OnInit {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10,
  }

  roomList: RoomList[] = [];
  selectedRoom!: RoomList;
  constructor() {
  }

  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioning, Free Wi-Fi, Flat-screen TV',
      price: 150,
      photos: 'https://example.com/deluxe-room.jpg',
      checkinTime: new Date('2024-07-01T14:00:00'),
      checkoutTime: new Date('2024-07-02T12:00:00'),
      rating: 4.5
    }, {
      roomNumber: 2,
      roomType: 'Suite',
      amenities: 'Air Conditioning, Free Wi-Fi, Flat-screen TV, Kitchenette',
      price: 250,
      photos: 'https://example.com/suite.jpg',
      checkinTime: new Date('2024-07-01T14:00:00'),
      checkoutTime: new Date('2024-07-02T12:00:00'),
      rating: 4.897
    }, {
      roomNumber: 3,
      roomType: 'Standard Room',
      amenities: 'Air Conditioning, Free Wi-Fi, Flat-screen TV',
      price: 100,
      photos: 'https://example.com/standard-room.jpg',
      checkinTime: new Date('2024-07-01T14:00:00'),
      checkoutTime: new Date('2024-07-02T12:00:00'),
      rating: 4.2
    }];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  
  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }
}
