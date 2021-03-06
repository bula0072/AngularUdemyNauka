import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { S38e185ChildComponent } from './s38e185-child/s38e185-child.component';
import { S38MainComponent } from './s38-main/s38-main.component';
import { S37Component } from './s37/s37.component';
import { S38e186ChildComponent } from './s38e186-child/s38e186-child.component';
import { MainComponent } from './lista/main/main.component';
import { AddTaskComponent } from './lista/add-task/add-task.component';
import { TodoTaskComponent } from './lista/todo-task/todo-task.component';
import { DoneTaskComponent } from './lista/done-task/done-task.component';

@NgModule({
  declarations: [
    AppComponent,
    S38e185ChildComponent,
    S38MainComponent,
    S37Component,
    S38e186ChildComponent,
    MainComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
