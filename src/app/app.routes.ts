import { Routes } from '@angular/router';
import { Soporte } from '../components/soporte/soporte';
import { Home } from '../components/home/home';
import { CharacterMultiplerole } from '../components/character-multiplerole/character-multiplerole';
import { CharacterDetail } from '../components/character-detail/character-detail';
import { CharacterTank } from '../components/character-tank/character-tank';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'soporte', component: Soporte },
    { path: 'character/multiplerole', component: CharacterMultiplerole },
    { path: 'character/detail/:id', component: CharacterDetail },
    { path: 'character/tank', component: CharacterTank }
];