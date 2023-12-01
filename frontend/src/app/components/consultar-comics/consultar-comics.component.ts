import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-consultar-comics',
  templateUrl: './consultar-comics.component.html',
  styleUrls: ['./consultar-comics.component.scss']
})
export class ConsultarComicsComponent implements OnInit{

  comicsData:Comic[] = [];
  displayedColumns: string[] = ['editorial', 'info', 'editar', 'borrar'];

  constructor(public backend:BackendService, private router:Router, public dialog: MatDialog){

  }

  ngOnInit(): void {
    if(this.backend.usuario_valido == 0){
      this.router.navigateByUrl("/login");
      window.alert("Debe haber iniciado sesión!");
    }
      this.backend.getComics().subscribe((cr:any) => {
        console.log(cr);
        this.comicsData = cr.comics;
      });
  }

  borrarComicDialog(id:number){
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
      if(result ==true){
        this.borrarComic(id);
      }else{
        console.log("no se va a borrar");
      }
    });
  }

  editarComic(id:number){
    this.backend.editarComic = id;
    this.router.navigateByUrl("/editarComic");
  }

  borrarComic(id:number){
    this.backend.deleteComic(id).subscribe((res:any) => {
      //window.alert(res.mensaje);
    });

    this.backend.getComics().subscribe((cr:any) => {
      console.log(cr);
      this.comicsData = cr.comics;
    });
    
  }

  ingresarComic(){
    this.router.navigateByUrl("/ingresarComic");
  }

  volverAMenu(){
    this.router.navigateByUrl("/menu");
  }
}


@Component({
  selector: 'borrar-comic-dialog',
  templateUrl: 'borrar-comic-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog {


  constructor(public backend:BackendService, private router:Router, public dialog: MatDialog){

  }

  
}