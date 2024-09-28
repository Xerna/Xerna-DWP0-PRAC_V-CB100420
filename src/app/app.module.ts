import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CompaComponent } from './compa/compa.component';
import { HalaMadridComponent } from './hala-madrid/hala-madrid.component';
import { ProgramacionComponent } from './programacion/programacion.component';

import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PadreeHijoComponent } from './padree-hijo/padree-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaComponent,
    HalaMadridComponent,
    ProgramacionComponent,
    CalculadoraComponent,
    PadreeHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
