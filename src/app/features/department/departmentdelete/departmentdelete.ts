import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IDepartment } from '../../../_models/idepartment';
import { DepartmentService } from '../../../_services/department';

@Component({
  selector: 'app-departmentdelete',
  imports: [RouterLink],
  templateUrl: './departmentdelete.html',
  styleUrl: './departmentdelete.css',
})
export class Departmentdelete {
  private departmentService = inject(DepartmentService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  dept: IDepartment | undefined;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dept = this.departmentService.getById(id);
  }

  confirmDelete() {
    if (this.dept) {
      this.departmentService.delete(this.dept.id);
      this.router.navigate(['/departments']);
    }
  }
}
