import { Component } from '@angular/core';
import { Istudent } from '../../../_models/istudent';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-studentlist',
  imports: [RouterLink, NgClass],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist {
  students: Istudent[] = [
    {
      id: 1,
      name: 'aly',
      age: 30,
    },
    {
      id: 2,
      name: 'ramy',
      age: 25,
    },
    {
      id: 3,
      name: 'sameh',
      age: 15,
    },
    {
      id: 4,
      name: 'sama',
      age: 20,
    },
    {
      id: 5,
      name: 'alyaa',
      age: 18,
    },
  ];
}
