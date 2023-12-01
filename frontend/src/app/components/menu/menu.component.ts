import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(public backend:BackendService, private router:Router){

  }

  ngOnInit(): void {
    if(this.backend.usuario_valido == 0){
      this.router.navigateByUrl("/login");
      window.alert("Debe haber iniciado sesión!");
    }
  } 
}
