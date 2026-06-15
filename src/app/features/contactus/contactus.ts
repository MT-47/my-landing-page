import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  name = '';
  email = '';
  message = '';
  submitted = false;

  submit() {
    if (this.name && this.email && this.message) {
      this.submitted = true;
    }
  }
}