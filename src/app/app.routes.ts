import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; 

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then(
        (m) => m.Dashboard,
      ),
  },
  {
    path: 'exercices/interpolation',
    loadComponent: () =>
      import('./pages/exercices/interpolation/interpolation').then(
        (m) => m.Interpolation,
      ),
  },
  {
    path: 'exercices/binding',
    loadComponent: () =>
      import('./pages/exercices/binding/binding').then(
        (m) => m.Binding,
      ),
  },  
  {
    path: 'exercices/steven-cigale',
    loadComponent: () =>
      import('./pages/exercices/steven-cigale/steven-cigale').then(
        (m) => m.StevenCigale
        ,
      ),
  },
  {
    path: 'exercices/event-binding',
    loadComponent: () =>
      import('./pages/exercices/event-binding/event-binding').then(
        (m) => m.EventBinding
        ,
      ),
  },
  {
    path: 'exercices/list-friends',
    loadComponent: () =>
      import('./pages/exercices/list-friends/list-friends').then(
        (m) => m.ListFriends
        ,
      ),
  },
  {
    path: 'exercices/exo-8',
    loadComponent: () =>
      import('./pages/exercices/exo-8/exo-8').then(
        (m) => m.Exo8
        ,
      ),
  },
  {
    path: 'exercices/exo-directives',
    loadComponent: () =>
      import('./pages/exercices/exo-directives/exo-directives').then(
        (m) => m.ExoDirectives
        ,
      ),
  },
    {
    path: '**',
    loadComponent: () =>
        import('./pages/not-found/not-found').then(
        (m) => m.NotFound
        ),
    }
];
