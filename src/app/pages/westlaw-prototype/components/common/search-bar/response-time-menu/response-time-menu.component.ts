import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-response-time-menu',
  templateUrl: './response-time-menu.component.html',
  styleUrls: ['./response-time-menu.component.less']
})
export class ResponseTimeMenuComponent {

  @ViewChild('rangeInput') slider: ElementRef<HTMLInputElement> | undefined;

  selectedTime = 2; // Start at the second position
  responseTime = 3;

  ngAfterViewInit() {
    this.slider!.nativeElement.value = '2';
    this.setBackgroundSize();
  }

  updateTime() {
    const times = [3, 5, 10, 15];
   
    if (this.selectedTime == 1) {
      this.slider!.nativeElement.value = '2';
      this.selectedTime = 2;
    } else if (this.selectedTime == 6) {
      this.slider!.nativeElement.value = '5';
      this.selectedTime = 5;
    }

    this.responseTime = times[this.selectedTime - 2];
    this.setBackgroundSize();
  }

  setBackgroundSize() {
    this.slider?.nativeElement.style.setProperty("--background-size", `${this.getBackgroundSize()}%`);
  }

  getBackgroundSize() {
    const input = this.slider?.nativeElement;

    if (input) {
      const min = +input.min || 0;
      const max = +input.max || 100;
      const value = +input.value;
    
      const size = (value - min) / (max - min) * 100;
    
      return size;
    }

    return 0;
  }

}
