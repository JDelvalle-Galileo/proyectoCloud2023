import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { ConsultaUsuariosComponent } from './components/consulta-usuarios/consulta-usuarios.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { IngresarComicComponent } from './components/ingresar-comic/ingresar-comic.component';
import { ConsultarComicsComponent } from './components/consultar-comics/consultar-comics.component';

import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { MenuComponent } from './components/menu/menu.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { EditarComicComponent } from './components/editar-comic/editar-comic.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ConsultaUsuariosComponent,
    RegistrarUsuarioComponent,
    IngresarComicComponent,
    ConsultarComicsComponent,
    EditarComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
  
})

export class AppModule { 
  
}
