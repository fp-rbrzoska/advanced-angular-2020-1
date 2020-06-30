import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
