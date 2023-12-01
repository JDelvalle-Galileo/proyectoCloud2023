import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent {

  nombre:string = "";
  email:string = "";
  password:string = "";
  dob:string = "";
  sexo:string = "";

  constructor(public backend:BackendService, private router:Router){

  }

  ngOnInit(): void {

  } 

  guardarUsuario(){
    if(this.nombre==""){
      window.alert("Ingrese un nombre!");
    }else{
      if(this.email == ""){
        window.alert("Ingrese un email!");
      }else{
        if(this.password == ""){
          window.alert("Ingrese un password!");
        }else if(this.password.length < 6){
          window.alert("El password debe ser de al menos 6 caracteres");
        }else{
          this.backend.insertUsuario(this.nombre, this.email, this.password, this.dob, this.sexo).subscribe((res:any) => {
            window.alert(res.mensaje);
          });
        }
      }
    }
    
    
  }

  volverALogin(){
    this.router.navigateByUrl("/login");
  }
}
