import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosResponse } from 'src/app/models/UsuariosResponse';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-consulta-usuarios',
  templateUrl: './consulta-usuarios.component.html',
  styleUrls: ['./consulta-usuarios.component.scss']
})
export class ConsultaUsuariosComponent implements OnInit{

  usuariosData:Usuario[] = [];
  displayedColumns: string[] = ['email', 'nombre', 'fecha_nacimiento', 'sexo'];

  constructor(public backend:BackendService, private router:Router){

  }


  ngOnInit(): void {
    if(this.backend.usuario_valido == 0){
      this.router.navigateByUrl("/login");
      window.alert("Debe haber iniciado sesión!");
    }
      this.backend.getUsuarios().subscribe((ur:any) => {
        console.log(ur);
        this.usuariosData = ur.usuarios;
      });
  }

  

  volverAMenu(){
    this.router.navigateByUrl("/menu");
  }
}
