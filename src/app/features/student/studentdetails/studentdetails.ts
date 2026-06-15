import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Istudent } from '../../../_models/istudent';
import { StudentService } from '../../../_services/student';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studentdetails',
  imports: [RouterLink],
  templateUrl: './studentdetails.html',
  styleUrl: './studentdetails.css',
})
export class Studentdetails implements OnInit {
  private studentService = inject(StudentService);
  private route = inject(ActivatedRoute);

  std: Istudent | undefined;

  sub : Subscription | null = null;
  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      this.std = this.studentService.getById(id);
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}