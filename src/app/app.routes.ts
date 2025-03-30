import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { IniciarsesionComponent } from './components/auth/iniciarsesion/iniciarsesion.component';
import { RegistrarseComponent } from './components/auth/registrarse/registrarse.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { DocsComponent } from './components/docs/docs.component';

//* ===========================

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'novedades', component: NovedadesComponent },
    { path: 'docs', component: DocsComponent },

    {path: 'iniciarsesion', component: IniciarsesionComponent},
    {path: 'registrarse', component: RegistrarseComponent},
    
    { path: '**', component: ErrorComponent },
    // { path: '', redirectTo: 'error' },
];