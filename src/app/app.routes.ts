import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Privacy } from './privacy/privacy';
import { Test } from './test/test';
import { Studentlist } from './features/student/studentlist/studentlist';
import { Studentadd } from './features/student/studentadd/studentadd';
import { Studentedit } from './features/student/studentedit/studentedit';
import { Studentdelete } from './features/student/studentdelete/studentdelete';
import { Departmentlist } from './features/department/departmentlist/departmentlist';
import { Departmentadd } from './features/department/departmentadd/departmentadd';
import { Departmentedit } from './features/department/departmentedit/departmentedit';
import { Departmentdelete } from './features/department/departmentdelete/departmentdelete';
import { Studentdetails } from './features/student/studentdetails/studentdetails';
import { Departmentdetails } from './features/department/departmentdetails/departmentdetails';
import { Productlist } from './features/product/productlist/productlist';
import { Contactus } from './features/contactus/contactus';
import { About } from './features/about/about';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },

  { path: 'test', component: Test },
  { path: 'privacy', component: Privacy },

  { path: 'students', component: Studentlist },
  { path: 'students/add', component: Studentadd },
  { path: 'students/edit/:id', component: Studentedit },
  { path: 'students/delete/:id', component: Studentdelete },
  { path: 'students/details/:id', component: Studentdetails },

  { path: 'departments', component: Departmentlist },
  { path: 'departments/add', component: Departmentadd },
  { path: 'departments/edit/:id', component: Departmentedit },
  { path: 'departments/delete/:id', component: Departmentdelete },
  { path: 'departments/details/:id', component: Departmentdetails },

  { path: 'products', component: Productlist },

  { path: 'about', component: About },
  { path: 'contact', component: Contactus },

  { path: '**', component: Notfound },
];
