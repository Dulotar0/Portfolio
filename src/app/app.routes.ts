import { Routes } from '@angular/router';
import { Presentation } from './body/presentation/presentation';
import { About } from './body/about/about'
import { Experience } from './body/experience/experience';
import { Proyects } from './body/proyects/proyects';

export const routes: Routes = [
    { path:'', component:Presentation, pathMatch: 'full'},
    { path:'about', component:About },
    { path:'experience', component:Experience },
    { path:'proyects', component:Proyects }
];
