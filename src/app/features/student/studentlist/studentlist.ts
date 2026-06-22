import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NgClass } from '@angular/common';
import { Istudent } from '../../../_models/istudent';
import { StudentService } from '../../../_services/student';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-studentlist',
  imports: [RouterLink, NgClass, RouterOutlet],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist implements OnInit, OnDestroy {
  private studentService = inject(StudentService);
  private router = inject(Router);
  private sub!: Subscription;

  students: Istudent[] = [];

  ngOnInit() {
    this.loadStudents();
    this.sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.loadStudents());
  }

  loadStudents() {
    this.studentService.getAll().subscribe((res: any) => {
      this.students = res.Data ?? res;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
