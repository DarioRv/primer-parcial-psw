import { Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { RecetasComponent } from './components/recetas/recetas.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'recetas', component: RecetasComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
