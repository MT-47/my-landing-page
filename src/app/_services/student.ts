import { Injectable } from '@angular/core';
import { Istudent } from '../_models/istudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private storageKey = 'students';

  private defaultStudents: Istudent[] = [
    { id: 1, name: 'aly', age: 30 },
    { id: 2, name: 'ramy', age: 25 },
    { id: 3, name: 'sameh', age: 15 },
    { id: 4, name: 'sama', age: 20 },
    { id: 5, name: 'alyaa', age: 18 },
  ];

  private load(): Istudent[] {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      return JSON.parse(data);
    }
    this.save(this.defaultStudents);
    return this.defaultStudents;
  }

  private save(students: Istudent[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(students));
  }

  getAll(): Istudent[] {
    return this.load();
  }

  getById(id: number): Istudent | undefined {
    return this.load().find((s) => s.id === id);
  }

  add(student: Istudent): void {
    const students = this.load();
    students.push(student);
    this.save(students);
  }

  update(updated: Istudent): void {
    const students = this.load();
    const index = students.findIndex((s) => s.id === updated.id);
    if (index !== -1) {
      students[index] = updated;
      this.save(students);
    }
  }

  delete(id: number): void {
    const students = this.load().filter((s) => s.id !== id);
    this.save(students);
  }
}
