// core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ngxs
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

// routing 
import { AppRoutingModule } from './app-routing.module';

// material modules
import { MaterialModule } from './material/material.module';

// compoents
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // core
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,

    // routing 
    AppRoutingModule,

    // material
    MaterialModule,

    // ngxs module and cofig
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
