import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'game/:slug',
    loadComponent: () => import('./pages/game-detail/game-detail.component').then(m => m.GameDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
