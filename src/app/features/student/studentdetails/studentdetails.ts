import { Component, inject, OnInit, OnDestroy } from '@angular/core';
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
export class Studentdetails implements OnInit, OnDestroy {
  private studentService = inject(StudentService);
  private route = inject(ActivatedRoute);

  std: Istudent | undefined;
  private sub!: Subscription;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.studentService.getById(id).subscribe(data => {
        this.std = data;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}