import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Istudent } from '../../../_models/istudent';
import { StudentService } from '../../../_services/student';

@Component({
  selector: 'app-studentedit',
  imports: [FormsModule, RouterLink],
  templateUrl: './studentedit.html',
  styleUrl: './studentedit.css',
})
export class Studentedit implements OnInit {
  private studentService = inject(StudentService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  std: Istudent = { id: 0, name: '', age: 0 };

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.studentService.getById(id);
    if (found) {
      this.std = { ...found };
    }
  }

  save() {
    this.studentService.update(this.std);
    this.router.navigate(['/students']);
  }
}