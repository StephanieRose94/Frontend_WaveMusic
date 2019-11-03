import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* COMPONENTES */
import { AppComponent } from './app.component';
import { RegistroComponent } from './myComponents/registro/registro.component';
import { ContenidoPerfilAdminComponent } from './myComponents/contenido-perfil-admin/contenido-perfil-admin.component';
import { ContenidoPerfilAdminAgregarComponent } from './myComponents/contenido-perfil-admin-agregar/contenido-perfil-admin-agregar.component';
import { ContenidoTendenciasComponent } from './myComponents/contenido-tendencias/contenido-tendencias.component';
import { ContenidoSugerenciasComponent } from './myComponents/contenido-sugerencias/contenido-sugerencias.component';
import { ContenidoMiListaComponent } from './myComponents/contenido-mi-lista/contenido-mi-lista.component';
import { ContenidoReproductorComponent } from './myComponents/contenido-reproductor/contenido-reproductor.component';

import { GeneroRockComponent } from './myComponents/genero-rock/genero-rock.component';
import { GeneroPopComponent } from './myComponents/genero-pop/genero-pop.component';
import { GeneroLatinoComponent } from './myComponents/genero-latino/genero-latino.component';
import { GeneroJazzybluesComponent } from './myComponents/genero-jazzyblues/genero-jazzyblues.component';
import { GeneroUrbanaComponent } from './myComponents/genero-urbana/genero-urbana.component';

/*  */
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';


/* SERVICIOS */
import { EquipoService } from './equipo.service';
import { SearchComponent } from './myComponents/search/search.component';
import { CancionesService } from './Servicios/canciones.service';



/*  */

const routes: Routes = [
  {
    path: 'registro', component: RegistroComponent
  },   
  {
    path: 'milista', component: ContenidoMiListaComponent
  },
  {
    path: 'tendencias', component: ContenidoTendenciasComponent
  },
  {
    path: 'sugerencias', component: ContenidoSugerenciasComponent
  },
  {
    path: 'admin', component: ContenidoPerfilAdminComponent
  },
  {
    path: 'admin/agregar', component: ContenidoPerfilAdminAgregarComponent
  },
  {
    path: 'tendencias/rock', component: GeneroRockComponent
  },
  {
    path: 'tendencias/pop', component: GeneroPopComponent
  },
  {
    path: 'tendencias/latino', component: GeneroLatinoComponent
  },
  {
    path: 'tendencias/urbana', component: GeneroUrbanaComponent
  },
  {
    path: 'tendencias/jazzyblues', component: GeneroJazzybluesComponent
  },
/*   {
    path: '**', component: ErrorComponent 
  }, */
] 


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ContenidoTendenciasComponent,
    ContenidoSugerenciasComponent,
    ContenidoMiListaComponent,
    ContenidoPerfilAdminComponent,
    ContenidoReproductorComponent,
    ContenidoPerfilAdminAgregarComponent,
    GeneroRockComponent,
    GeneroPopComponent,
    GeneroLatinoComponent,
    GeneroJazzybluesComponent,
    GeneroUrbanaComponent,
    FilterPipe,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), /* estamos enrutando páginas principales */
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EquipoService,
    CancionesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
