import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PensamientoComputacionalComponent } from './components/pensamiento-computacional/pensamiento-computacional.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    PensamientoComputacionalComponent,
    HerramientasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
