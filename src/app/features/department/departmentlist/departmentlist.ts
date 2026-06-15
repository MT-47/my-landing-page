import { Component, inject, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { IDepartment } from '../../../_models/idepartment';
import { DepartmentService } from '../../../_services/department';

@Component({
  selector: 'app-departmentlist',
  imports: [RouterLink, NgClass, RouterOutlet],
  templateUrl: './departmentlist.html',
  styleUrl: './departmentlist.css',
})
export class Departmentlist implements OnInit {
  private departmentService = inject(DepartmentService);

  departments: IDepartment[] = [];

  ngOnInit(): void {
    this.departments = this.departmentService.getAll();
  }
}
