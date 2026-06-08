import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IDepartment } from '../../../_models/idepartment';
import { DepartmentService } from '../../../_services/department';

@Component({
  selector: 'app-departmentdetails',
  imports: [RouterLink],
  templateUrl: './departmentdetails.html',
  styleUrl: './departmentdetails.css',
})
export class Departmentdetails implements OnInit {
  private departmentService = inject(DepartmentService);
  private route = inject(ActivatedRoute);

  dept: IDepartment | undefined;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dept = this.departmentService.getById(id);
  }
}