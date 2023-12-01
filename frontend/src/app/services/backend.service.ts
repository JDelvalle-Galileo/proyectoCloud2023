import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/LoginResponse';
import { Usuario } from '../models/Usuario';

const URL_BACKEND = 'http://localhost:8888/';
const HEADERS = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  usuario_valido:number = 0;
  usuario:string = "";
  emailUsuario:string = "";
  editarComic:number = 0;

  constructor(private http:HttpClient, private router:Router) { }

  login(email:string, password:string){
    let body = `{"email": "${email}","password": "${password}"}`;
    this.http.post<LoginResponse>(URL_BACKEND+'usuario_valido',body, HEADERS).subscribe((lr:LoginResponse) => {
      this.usuario = lr.usuario[0].nombre;
      this.emailUsuario = lr.usuario[0].email;
      this.usuario_valido = lr.usuario_valido;
    });

    return this.http.post<LoginResponse>(URL_BACKEND+'usuario_valido',body, HEADERS);
  }

  getUsuarios(){
   return this.http.get(URL_BACKEND+"usuarios", HEADERS);
  }

  getComics(){
    return this.http.get(URL_BACKEND+"comics", HEADERS);
   }
  
  getSingleComic(id:number){
  return this.http.get(URL_BACKEND+"comics/"+id, HEADERS);
  }

  insertUsuario(nombre:string,email:string,password:string,dob:string,sexo:string){
    let body = `{
      "email": "${email}",
      "password": "${password}",
      "nombre": "${nombre}",
      "fecha_nacimiento": "${dob}",
      "sexo": "${sexo}"
    }`
    console.log(body);
    return this.http.put(URL_BACKEND+"insertar_usuario", body, HEADERS);
  }

  insertComic(nombre:string,impresion:string,sinopsis:string,editorial:string,emailUsuario:string){
    let body = `{
      "nombre": "${nombre}",
      "impresion": "${impresion}",
      "sinopsis": "${sinopsis}",
      "editorial": "${editorial}",
      "emailUsuario": "${emailUsuario}"
    }`
    console.log(body);
    return this.http.put(URL_BACKEND+"insertar_comic", body, HEADERS);
  }

  updateComic(id:number, nombre:string,impresion:string,sinopsis:string,editorial:string){
    let body = `{
      "id": ${id},
      "nombre": "${nombre}",
      "impresion": "${impresion}",
      "sinopsis": "${sinopsis}",
      "editorial": "${editorial}"
    }`
    console.log(body);
    return this.http.put(URL_BACKEND+"update_comic", body, HEADERS);
  }

  deleteComic(id:number){
    return this.http.delete(URL_BACKEND+"comics/"+id, HEADERS);
  }


}
