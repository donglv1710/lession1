import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { BindingComponent } from './binding/binding.component';
import { Child1RoutingModule } from './child1/child1-routing.module';
import { Child1Component } from './child1/child1.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTempaleComponent } from './form-tempale/form-tempale.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'binding', component:BindingComponent}, 
  {path: 'event', component:BindingEventComponent},
  {path: 'home', component:HomeComponent},
  {path: 'child1', loadChildren: ()=>Child1RoutingModule},
  {path: 'form-template', component:FormTempaleComponent},
  {path: 'form-reactive', component:FormReactiveComponent},
  {
    path: 'admin', 
    component:AdminComponent,
    children:
    [
      {path:'', redirectTo:"report",pathMatch:'full'},
      {
        path:'report',
        loadChildren: ()=> import('./admin/report/report.module').then(m=>m.ReportModule)             
      }
     // {path:'', component:ReportComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
