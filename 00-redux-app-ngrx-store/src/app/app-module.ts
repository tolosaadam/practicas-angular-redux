import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

import { App } from './app';
import { Hijo } from './contador/hijo/hijo';
import { Nieto } from './contador/nieto/nieto';

// NgRx
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';

@NgModule({
  declarations: [
    App,
    Hijo,
    Nieto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
