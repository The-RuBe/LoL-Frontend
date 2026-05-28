import { Routes } from '@angular/router';
import { Soporte } from '../components/soporte/soporte';
import { Home } from '../components/home/home';

export const routes: Routes = [
    {path: ' ', component: Home},
    {path: '/soporte', component: Soporte}
];