import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },

    {
        path: 'portfolio',
        loadComponent: () => import('./portfolio/portfolio').then(c => c.Portfolio)
    }
];
