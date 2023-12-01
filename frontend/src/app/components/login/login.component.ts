import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email:string = "";
  password:string = "";

  constructor(private backend:BackendService, private router:Router){

  }

  ngOnInit(): void {
      this.email = "";
      this.password = "";
      this.backend.usuario = "";
      this.backend.usuario_valido = 0;
  }

  registrarUsuario(){
    this.router.navigateByUrl("/registrarUsuario");
  }

  login(){
    if(this.email != "" && this.password != ""){
      if(this.password.length > 5){
        this.backend.login(this.email, this.password).subscribe((lr:LoginResponse) => {
          if(lr.usuario_valido){
            this.router.navigateByUrl("/menu");
          }else{
            window.alert("Credenciales inválidas!");
          }
        });
      }else{
        window.alert("El password debe ser de al menos 6 caracteres!")
      }
    }else{
      window.alert("Ingrese un email y un password");
    }
    
  }
}
