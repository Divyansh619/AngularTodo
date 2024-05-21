import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datachange',
  templateUrl: './datachange.component.html',
  styleUrl: './datachange.component.css',
})
export class DatachangeComponent implements OnInit {
  buttonText: string = 'I am not clicked';
  contacts = [
    { name: 'John', mobileNumber: '1234567890' },
    { name: 'Alice', mobileNumber: '9876543210' },
    { name: 'Bob', mobileNumber: '4567890123' },
    { name: 'Emily', mobileNumber: '7890123456' },
    { name: 'David', mobileNumber: '2345678901' }
  ];
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  toggleText(): void {
    this.buttonText =
      this.buttonText === 'I am not clicked'
        ? 'I am clicked'
        : 'I am not clicked';
  }
}
