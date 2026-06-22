import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Istudent } from '../_models/istudent';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/Students`;

getAll(): Observable<Istudent[]> {
  return this.http.get<Istudent[]>(this.url);
}

  getById(id: number): Observable<Istudent> {
    return this.http.get<Istudent>(`${this.url}/${id}`);
  }

  add(student: Istudent): Observable<any> {
    return this.http.post(this.url, student);
  }

  update(student: Istudent) {
    return this.http.put(`${this.url}/${student.stId}`, student);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
