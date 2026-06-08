import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Istudent } from '../../../_models/istudent';
import { StudentService } from '../../../_services/student';

@Component({
  selector: 'app-studentdelete',
  imports: [RouterLink],
  templateUrl: './studentdelete.html',
  styleUrl: './studentdelete.css',
})
export class Studentdelete implements OnInit {
  private studentService = inject(StudentService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  std: Istudent | undefined;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.std = this.studentService.getById(id);
  }

  confirmDelete() {
    if (this.std) {
      this.studentService.delete(this.std.id);
      this.router.navigate(['/students']);
    }
  }
}