import { Routes } from '@angular/router';
import { Home } from './body/home/home';
import { Experience } from './body/experience/experience';

export const routes: Routes = [
    { path:'', component:Home, pathMatch: 'full'},
    { path:'experience', component:Experience }
];
