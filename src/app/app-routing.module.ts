import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { BindingComponent } from './binding/binding.component';
import { Child1RoutingModule } from './child1/child1-routing.module';
import { Child1Component } from './child1/child1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'binding', component:BindingComponent}, 
  {path: 'event', component:BindingEventComponent},
  {path: 'home', component:HomeComponent},
  {path: 'child1', loadChildren: ()=>Child1RoutingModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
