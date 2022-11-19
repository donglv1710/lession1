import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Child1Module } from './child1/child1.module';
import { FormTempaleComponent } from './form-tempale/form-tempale.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HomeComponent,
    BindingEventComponent,
    FormTempaleComponent,
    FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Child1Module,// you want use [(ngModel)] in Module child. You having add Module in appModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
