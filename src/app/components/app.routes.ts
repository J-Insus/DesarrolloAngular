import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { PensamientoComputacionalComponent } from './pensamiento-computacional/pensamiento-computacional.component';


const APP_ROUTES:Routes=[
{path: 'home', component: HomeComponent },
{ path: 'herramientas', component: HerramientasComponent },
{ path: 'pensamiento-computacional', component: PensamientoComputacionalComponent },
{ path: '**', redirectTo: '' } // Cualquier ruta no encontrada, redirige a Home
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);