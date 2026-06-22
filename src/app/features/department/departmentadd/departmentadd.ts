import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IDepartment } from '../../../_models/idepartment';
import { DepartmentService } from '../../../_services/department';

@Component({
  selector: 'app-departmentadd',
  imports: [FormsModule, RouterLink],
  templateUrl: './departmentadd.html',
  styleUrl: './departmentadd.css',
})
export class Departmentadd {
  private departmentService = inject(DepartmentService);
  private router = inject(Router);

  dept: IDepartment = { DeptId: 0, DeptName: '', DeptLocation: '' };

  add() {
    this.departmentService.add(this.dept).subscribe(() => {
      this.router.navigate(['/departments']);
    });
  }
}