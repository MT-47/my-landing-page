import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Istudent } from '../../../_models/istudent';
import { StudentService } from '../../../_services/student';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studentedit',
  imports: [FormsModule, RouterLink],
  templateUrl: './studentedit.html',
  styleUrl: './studentedit.css',
})
export class Studentedit implements OnInit, OnDestroy {
  private studentService = inject(StudentService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  std: Istudent = { id: 0, name: '', age: 0 };
  private sub!: Subscription;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      const found = this.studentService.getById(id);
      if (found) this.std = { ...found };
    });
  }

  save() {
    this.studentService.update(this.std);
    this.router.navigate(['/students']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}