import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-editar-comic',
  templateUrl: './editar-comic.component.html',
  styleUrls: ['./editar-comic.component.scss']
})
export class EditarComicComponent {

  nombre:string = "";
  impresion:string = "";
  sinopsis:string = "";
  editorial:string = "";

  constructor(public backend:BackendService, private router:Router){

  }

  ngOnInit(): void {
    if(this.backend.usuario_valido == 0){
      this.router.navigateByUrl("/login");
      window.alert("Debe haber iniciado sesión!");
    };
    if(this.backend.editarComic != 0){
      this.backend.getSingleComic(this.backend.editarComic).subscribe((res:any) => {
        this.nombre = res.comics[0].nombre;
        this.impresion = res.comics[0].impresion;
        this.sinopsis = res.comics[0].sinopsis;
        this.editorial = res.comics[0].editorial;
      })
    }
    
  } 

  guardarComic(){
    if(this.nombre == ""){
      window.alert("Ingrese un nombre!");
    }else{
      if(this.impresion == ""){
        window.alert("Ingrese un año de impresión!");
      }else{
        this.backend.updateComic(this.backend.editarComic, this.nombre, this.impresion, this.sinopsis, this.editorial).subscribe((res:any) => {
          window.alert(res.mensaje);
        });
      }
      
    }
    
  }

  volverAMenu(){
    this.router.navigateByUrl("/menu");
  }
}
