import { Routes } from '@angular/router';

import { Departmentlist } from './departmentlist/departmentlist';
import { Departmentadd } from './departmentadd/departmentadd';
import { Departmentedit } from './departmentedit/departmentedit';
import { Departmentdelete } from './departmentdelete/departmentdelete';
import { Departmentdetails } from './departmentdetails/departmentdetails';

export const departmentsroutes: Routes = [
  {
    path: '',
    component: Departmentlist,
    children: [
      { path: 'add', component: Departmentadd },
      { path: 'edit/:id', component: Departmentedit },
      { path: 'delete/:id', component: Departmentdelete },
      { path: 'details/:id', component: Departmentdetails },
    ],
  },
];