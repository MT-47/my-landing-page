import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Istudent } from '../../../_models/istudent';
import { StudentService } from '../../../_services/student';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studentdelete',
  imports: [RouterLink],
  templateUrl: './studentdelete.html',
  styleUrl: './studentdelete.css',
})
export class Studentdelete implements OnInit, OnDestroy {
  private studentService = inject(StudentService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  std: Istudent | undefined;
  private sub!: Subscription;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.std = this.studentService.getById(id);
    });
  }

  confirmDelete() {
    if (this.std) {
      this.studentService.delete(this.std.id);
      this.router.navigate(['/students']);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}