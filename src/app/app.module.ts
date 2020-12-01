import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list.component';
import { SliderComponent } from './slider.component';
import { ItemComponent } from './item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes =[
    { path: '', component: TodoListComponent},
    { path: 'slider', component: SliderComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SliderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
