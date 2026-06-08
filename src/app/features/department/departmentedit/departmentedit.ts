import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IDepartment } from '../../../_models/idepartment';
import { DepartmentService } from '../../../_services/department';

@Component({
  selector: 'app-departmentedit',
  imports: [FormsModule, RouterLink],
  templateUrl: './departmentedit.html',
  styleUrl: './departmentedit.css',
})
export class Departmentedit implements OnInit {
  private departmentService = inject(DepartmentService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  dept: IDepartment = {
    id: 0,
    name: '',
    location: '',
  };

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.departmentService.getById(id);

    if (found) {
      this.dept = { ...found };
    }
  }

  save() {
    this.departmentService.update(this.dept);
    this.router.navigate(['/departments']);
  }
}