import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  standalone: false,

  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.css',
})
export class StopwatchComponent {
  milliseconds: number = 0;
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  laps: Array<Array<number>> = new Array();
  private intervalId!: ReturnType<typeof setInterval>;

  start(): void {
    this.intervalId = setInterval(() => {
      this.milliseconds++;
      if (this.milliseconds > 99) {
        this.milliseconds = 0;
        this.seconds++;
      }
      if (this.seconds > 59) {
        this.seconds = 0;
        this.minutes++;
      }
      if (this.minutes > 59) {
        this.minutes = 0;
        this.hours++;
      }
    }, 10);
  }
  pause(): void {
    clearInterval(this.intervalId);
  }
  restart(): void {
    clearInterval(this.intervalId);
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }
  save(): void {
    this.laps.push([this.hours, this.minutes, this.seconds, this.milliseconds]);
  }
}
