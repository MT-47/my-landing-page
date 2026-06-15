import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NgClass } from '@angular/common';
import { IDepartment } from '../../../_models/idepartment';
import { DepartmentService } from '../../../_services/department';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-departmentlist',
  imports: [RouterLink, NgClass, RouterOutlet],
  templateUrl: './departmentlist.html',
  styleUrl: './departmentlist.css',
})
export class Departmentlist implements OnInit, OnDestroy {
  private departmentService = inject(DepartmentService);
  private router = inject(Router);
  private sub!: Subscription;

  departments: IDepartment[] = [];

  ngOnInit() {
    this.departments = this.departmentService.getAll();
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.departments = this.departmentService.getAll();
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}