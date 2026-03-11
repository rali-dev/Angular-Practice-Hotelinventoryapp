import { Component } from '@angular/core';
import { Room, RoomList } from './rooms.interface';
import { NgIf, NgFor, NgClass, NgStyle, DatePipe, PercentPipe, CurrencyPipe, TitleCasePipe, UpperCasePipe, JsonPipe, SlicePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  imports: [NgIf, NgFor, NgClass, NgStyle, DatePipe, PercentPipe, CurrencyPipe, TitleCasePipe, UpperCasePipe, JsonPipe, SlicePipe, DecimalPipe],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})

export class Rooms {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 10,
  }

  roomList: RoomList[] = [{
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


  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
