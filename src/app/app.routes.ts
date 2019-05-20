import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
