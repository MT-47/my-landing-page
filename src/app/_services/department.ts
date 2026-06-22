import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartment } from '../_models/idepartment';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/Departments`;

  getAll(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this.url);
  }

  getById(id: number): Observable<IDepartment> {
    return this.http.get<IDepartment>(`${this.url}/${id}`);
  }

  add(dept: IDepartment): Observable<any> {
    return this.http.post(this.url, dept);
  }

  update(dept: IDepartment): Observable<any> {
    return this.http.put(`${this.url}/${dept.DeptId}`, dept);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}