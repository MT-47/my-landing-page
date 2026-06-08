import { Injectable } from '@angular/core';
import { IDepartment } from '../_models/idepartment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private storageKey = 'departments';

  private defaultDepartments: IDepartment[] = [
    { id: 1, name: 'Computer Science', location: 'Building A' },
    { id: 2, name: 'Information Systems', location: 'Building B' },
    { id: 3, name: 'Software Engineering', location: 'Building C' },
  ];

  private load(): IDepartment[] {
    const data = localStorage.getItem(this.storageKey);

    if (data) {
      return JSON.parse(data);
    }

    this.save(this.defaultDepartments);
    return this.defaultDepartments;
  }

  private save(departments: IDepartment[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(departments));
  }

  getAll(): IDepartment[] {
    return this.load();
  }

  getById(id: number): IDepartment | undefined {
    return this.load().find((d) => d.id === id);
  }

  add(department: IDepartment): void {
    const departments = this.load();
    departments.push(department);
    this.save(departments);
  }

  update(updated: IDepartment): void {
    const departments = this.load();
    const index = departments.findIndex((d) => d.id === updated.id);

    if (index !== -1) {
      departments[index] = updated;
      this.save(departments);
    }
  }

  delete(id: number): void {
    const departments = this.load().filter((d) => d.id !== id);
    this.save(departments);
  }
}