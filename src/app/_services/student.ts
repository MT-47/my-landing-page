import { Injectable } from '@angular/core';
import { Istudent } from '../_models/istudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Istudent[] = [
    { id: 1, name: 'aly', age: 30 },
    { id: 2, name: 'ramy', age: 25 },
    { id: 3, name: 'sameh', age: 15 },
    { id: 4, name: 'sama', age: 20 },
    { id: 5, name: 'alyaa', age: 18 },
  ];

  getAll(): Istudent[] {
    return this.students;
  }

  getById(id: number): Istudent | undefined {
    return this.students.find((s) => s.id === id);
  }

  add(student: Istudent): void {
    this.students.push(student);
  }

  update(updated: Istudent): void {
    const index = this.students.findIndex((s) => s.id === updated.id);
    if (index !== -1) {
      this.students[index] = updated;
    }
  }

  delete(id: number): void {
    this.students = this.students.filter((s) => s.id !== id);
  }
}