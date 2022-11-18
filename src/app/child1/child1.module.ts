import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Child1RoutingModule } from './child1-routing.module';
import { Child1Component } from './child1.component';
import { C1Component } from './c1/c1.component'

@NgModule({
  declarations: [
    Child1Component,
    C1Component,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Child1RoutingModule, 
  ]
})
export class Child1Module { }
