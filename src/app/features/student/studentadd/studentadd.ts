import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Istudent } from '../../../_models/istudent';
import { StudentService } from '../../../_services/student';

@Component({
  selector: 'app-studentadd',
  imports: [FormsModule, RouterLink],
  templateUrl: './studentadd.html',
  styleUrl: './studentadd.css',
})
export class Studentadd {
  private studentService = inject(StudentService);
  private router = inject(Router);

  std: Istudent = { id: 0, name: '', age: 0 };

  add() {
    this.studentService.add(this.std);
    this.router.navigate(['/students']);
  }
}