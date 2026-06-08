import { Routes } from '@angular/router';
import { Soporte } from '../components/soporte/soporte';
import { Home } from '../components/home/home';
import { CharacterMultiplerole } from '../components/character-multiplerole/character-multiplerole';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'soporte', component: Soporte},
    {path: 'character/multiplerole', component: CharacterMultiplerole}
];