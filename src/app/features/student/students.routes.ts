import { Routes } from '@angular/router';

import { Studentlist } from './studentlist/studentlist';
import { Studentadd } from './studentadd/studentadd';
import { Studentedit } from './studentedit/studentedit';
import { Studentdelete } from './studentdelete/studentdelete';
import { Studentdetails } from './studentdetails/studentdetails';

export const studentsroutes: Routes = [
  {
    path: '',
    component: Studentlist,
    children: [
      { path: 'add', component: Studentadd },
      { path: 'edit/:id', component: Studentedit },
      { path: 'delete/:id', component: Studentdelete },
      { path: 'details/:id', component: Studentdetails },
    ],
  },
];
