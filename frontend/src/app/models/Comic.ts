export class Comic{
    id:number;
    nombre: string;
    impresion:string;
    sinopsis:string;
    editorial:string;
    emailUsuario:string;

    constructor(id:number, nombre:string, impresion:string, sinopsis:string, editorial:string, emailUsuario:string){
        this.id = id;
        this.nombre = nombre;
        this.impresion = impresion;
        this.sinopsis = sinopsis;
        this.editorial = editorial;
        this.emailUsuario = emailUsuario;
    }
}