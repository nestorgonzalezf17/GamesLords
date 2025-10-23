import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Games } from './pages/games/games';
import { Contact } from './pages/contact/contact';
import { Lords } from './pages/lords/lords';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'Nosotros', component:About},
    {path:'Juegos',component:Games},
    {path:'Contacto',component:Contact},
    {path:'Lords',component:Lords},
    {path:'**',redirectTo:''}
];
