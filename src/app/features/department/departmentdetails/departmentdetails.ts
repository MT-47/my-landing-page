import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IDepartment } from '../../../_models/idepartment';
import { DepartmentService } from '../../../_services/department';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-departmentdetails',
  imports: [RouterLink],
  templateUrl: './departmentdetails.html',
  styleUrl: './departmentdetails.css',
})
export class Departmentdetails implements OnInit, OnDestroy {
  private departmentService = inject(DepartmentService);
  private route = inject(ActivatedRoute);

  dept: IDepartment | undefined;
  private sub!: Subscription;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.dept = this.departmentService.getById(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}