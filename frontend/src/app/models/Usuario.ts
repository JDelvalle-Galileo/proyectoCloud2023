export class Usuario{
    id:number;
    email:string;
    nombre: string;
    fecha_nacimiento:string;
    sexo:string;

    constructor(id:number, email:string, nombre:string, fecha_nacimiento:string, sexo:string){
        this.id = id;
        this.email = email;
        this.nombre = nombre;
        this.fecha_nacimiento = fecha_nacimiento;
        this.sexo = sexo
    }
}