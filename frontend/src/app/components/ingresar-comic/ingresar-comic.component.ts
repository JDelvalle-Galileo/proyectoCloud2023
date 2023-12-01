import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-ingresar-comic',
  templateUrl: './ingresar-comic.component.html',
  styleUrls: ['./ingresar-comic.component.scss']
})
export class IngresarComicComponent {

  nombre:string = "";
  impresion:string = "";
  sinopsis:string = "";
  editorial:string = "Marvel";

  constructor(public backend:BackendService, private router:Router){

  }

  ngOnInit(): void {
    if(this.backend.usuario_valido == 0){
      this.router.navigateByUrl("/login");
      window.alert("Debe haber iniciado sesión!");
    }
  } 

  guardarComic(){
    if(this.nombre == ""){
      window.alert("Ingrese un nombre!");
    }else{
      if(this.impresion == ""){
        window.alert("Ingrese un año de impresión!");
      }else{
        this.backend.insertComic(this.nombre, this.impresion, this.sinopsis, this.editorial, this.backend.emailUsuario).subscribe((res:any) => {
          window.alert(res.mensaje);
        });
      }
      
    }
    
  }

  volverAMenu(){
    this.router.navigateByUrl("/menu");
  }
}
