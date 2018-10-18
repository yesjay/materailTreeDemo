import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './core/material.module';
import { AppComponent } from './app.component';
import { TreePracComponent } from './tree-prac/tree-prac.component';

@NgModule({
  declarations: [
    AppComponent,
    TreePracComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
