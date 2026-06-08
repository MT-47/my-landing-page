import { Component, inject, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { Istudent } from '../../../_models/istudent';
import { StudentService } from '../../../_services/student';



@Component({
  selector: 'app-studentlist',
  imports: [RouterLink, NgClass],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist implements OnInit {
  private studentService = inject(StudentService);
  students: Istudent[] = [];

  ngOnInit() {
    this.students = this.studentService.getAll();
  }
}