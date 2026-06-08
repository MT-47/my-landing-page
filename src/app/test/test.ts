import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { DatePickerModule } from 'primeng/datepicker';


@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, RatingModule, DatePickerModule],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  age: number = 24;
  value: number = 0;
  date: Date = new Date();
}
