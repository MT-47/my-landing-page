import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IDepartment } from '../../../_models/idepartment';
import { DepartmentService } from '../../../_services/department';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-departmentedit',
  imports: [FormsModule, RouterLink],
  templateUrl: './departmentedit.html',
  styleUrl: './departmentedit.css',
})
export class Departmentedit implements OnInit, OnDestroy {
  private departmentService = inject(DepartmentService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  dept: IDepartment = { id: 0, name: '', location: '' };
  private sub!: Subscription;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      const found = this.departmentService.getById(id);
      if (found) this.dept = { ...found };
    });
  }

  save() {
    this.departmentService.update(this.dept);
    this.router.navigate(['/departments']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}