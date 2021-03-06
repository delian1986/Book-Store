import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminGuard } from './core/guards/auth/admin.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:HomeComponent },
  { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule',canLoad:[AdminGuard] },
  { path: 'book', loadChildren: './components/book/book.module#BookModule',canLoad:[AuthGuard] },
  { path: 'cart', loadChildren: './components/cart/cart.module#CartModule', canLoad: [AuthGuard] },
  { path: 'order', loadChildren: './components/order/order.module#OrderModule', canLoad: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
