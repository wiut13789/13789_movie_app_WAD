import { Routes } from '@angular/router';
import { HomeComponent as GenreHomeComponent } from './genre/home/home.component';
import { CreateComponent as GenreCreateComponent } from './genre/create/create.component';
import { EditComponent as GenreEditComponent } from './genre/edit/edit.component';
import { DeleteComponent as GenreDeleteComponent } from './genre/delete/delete.component';
import { DetailsComponent as GenreDetailsComponent } from './genre/details/details.component';
import { HomeComponent as MovieHomeComponent } from './movie/home/home.component';
import { CreateComponent as MovieCreateComponent } from './movie/create/create.component';
import { EditComponent as MovieEditComponent } from './movie/edit/edit.component';
import { DeleteComponent as MovieDeleteComponent } from './movie/delete/delete.component';
import { DetailsComponent as MovieDetailsComponent } from './movie/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: MovieHomeComponent,
  },
  {
    path: 'movies',
    component: MovieHomeComponent,
  },
  {
    path: 'movie/create',
    component: MovieCreateComponent,
  },
  {
    path: 'movie/edit/:id',
    component: MovieEditComponent,
  },
  {
    path: 'movie/delete/:id',
    component: MovieDeleteComponent,
  },
  {
    path: 'movie/details/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'genres',
    component: GenreHomeComponent,
  },
  {
    path: 'genre/create',
    component: GenreCreateComponent,
  },
  {
    path: 'genre/edit/:id',
    component: GenreEditComponent,
  },
  {
    path: 'genre/delete/:id',
    component: GenreDeleteComponent,
  },
  {
    path: 'genre/details/:id',
    component: GenreDetailsComponent,
  },
];
