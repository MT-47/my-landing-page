import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IDepartment } from '../../../_models/idepartment';
import { DepartmentService } from '../../../_services/department';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-departmentdelete',
  imports: [RouterLink],
  templateUrl: './departmentdelete.html',
  styleUrl: './departmentdelete.css',
})
export class Departmentdelete implements OnInit, OnDestroy {
  private departmentService = inject(DepartmentService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  dept: IDepartment | undefined;
  private sub!: Subscription;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.departmentService.getById(id).subscribe(data => {
        this.dept = data;
      });
    });
  }

  confirmDelete() {
    if (this.dept) {
      this.departmentService.delete(this.dept.DeptId).subscribe(() => {
        this.router.navigate(['/departments']);
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}