import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/note/1',
    pathMatch: 'full',
  },
  {
    path: 'note',
    loadChildren: () => import('./pages/note/note.module').then(m => m.NoteModule),
  },
  {
    path: 'note/:id',
    loadChildren: () => import('./pages/note/note.module').then(m => m.NoteModule),
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
