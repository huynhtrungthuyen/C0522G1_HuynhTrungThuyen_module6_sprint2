import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoeListComponent} from "./shoe/shoe-list/shoe-list.component";
import {ShoeDetailComponent} from "./shoe/shoe-detail/shoe-detail.component";
import {ShoeCartComponent} from "./shoe/shoe-cart/shoe-cart.component";


const routes: Routes = [
  {path: '', component: ShoeListComponent},
  {path: 'detail/:id', component: ShoeDetailComponent},
  {path: 'cart', component: ShoeCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
