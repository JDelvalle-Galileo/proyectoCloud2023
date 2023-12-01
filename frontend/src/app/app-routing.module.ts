import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultaUsuariosComponent } from './components/consulta-usuarios/consulta-usuarios.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ConsultarComicsComponent } from './components/consultar-comics/consultar-comics.component';
import { IngresarComicComponent } from './components/ingresar-comic/ingresar-comic.component';
import { EditarComicComponent } from './components/editar-comic/editar-comic.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"menu", component:MenuComponent},
  {path:"login", component:LoginComponent},
  {path:"consultaUsuarios", component:ConsultaUsuariosComponent},
  {path:"registrarUsuario", component:RegistrarUsuarioComponent},
  {path:"consultarComics", component:ConsultarComicsComponent},
  {path:"ingresarComic", component:IngresarComicComponent},
  {path:"editarComic", component:EditarComicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
