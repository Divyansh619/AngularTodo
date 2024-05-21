import { Component } from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css'],
})
export class PercentageComponent {
  percentage: number = 0;
  inputValue: number | undefined;

  constructor() {}
  onInputChange(event: any) {
    this.inputValue = event.target.value;
  }
  calculatePercentage(percent: number) {
    if (this.inputValue !== undefined) {
      this.percentage = (this.inputValue * percent) / 100;
    }
  }
}
