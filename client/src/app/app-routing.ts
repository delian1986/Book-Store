import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminGuard } from './core/guards/auth/admin.guard';
import { AdminModule } from './components/admin/admin.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:HomeComponent },
  { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule',canLoad:[AdminGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
