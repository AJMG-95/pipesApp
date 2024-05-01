import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

//Configuacion del locale de la app
import localeEs from "@angular/common/locales/es-419"
import localeFrCA from "@angular/common/locales/fr-CA"

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs)
registerLocaleData(localeFrCA)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-419'  //Definir por defecto un idioma (es-419) en toda la app
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
