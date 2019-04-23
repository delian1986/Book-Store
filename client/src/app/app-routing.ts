import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminGuard } from './core/guards/auth/admin.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:HomeComponent },
  { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule',canLoad:[AdminGuard] },
  { path: 'book', loadChildren: './components/book/book.module#BookModule',canLoad:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
