import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Privacy } from './privacy/privacy';
import { Test } from './test/test';

import { Productlist } from './features/product/productlist/productlist';
import { Contactus } from './features/contactus/contactus';
import { About } from './features/about/about';
import { Notfound } from './notfound/notfound';
import { Login } from './login/login';
import { Register } from './register/register';
import { canloginGuard } from './guards/canlogin-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },

  { path: 'login', component: Login },
  { path: 'register', component: Register},

  { path: 'test', component: Test , canActivate: [canloginGuard]},
  { path: 'privacy', component: Privacy },

  {
    path: 'students',
    loadChildren: () => import('./features/student/students.routes').then((s) => s.studentsroutes),
  },

  {
    path: 'departments',
    loadChildren: () => import('./features/department/departments.routes').then((d) => d.departmentsroutes),
  },

  { path: 'products', component: Productlist },

  { path: 'about', component: About },
  { path: 'contact', component: Contactus },

  { path: '**', component: Notfound },
];
