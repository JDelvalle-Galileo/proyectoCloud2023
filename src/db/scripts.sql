use faw2023;

create table usuarios(
	id int AUTO_INCREMENT,
    email varchar(150) not null,
    password varchar(500) not null,
    nombre varchar(200) not null,
    primary key (id)    
);

alter table usuarios add column fecha_nacimiento varchar(50);
alter table usuarios add column sexo varchar(1);

select id, email, nombre, fecha_nacimiento, sexo from usuarios;

insert into usuarios(email, password, nombre, fecha_nacimiento, sexo) values ('admin2@bd.com', md5('12345'), 'Administrador2', '2000-01-01', 'F');

select * from usuarios;

delete from usuarios where id = 2;


create table comics(
	id int AUTO_INCREMENT,
    nombre varchar(200) not null,
    impresion varchar(50),
    sinopsis varchar(500),
    editorial varchar(50) not null,
    emailUsuario varchar(150) not null,
    primary key(id)
);

select * from comics;

update comics set editorial = 'Image' where id = 4;



select id, nombre, impresion, sinopsis, editorial, emailUsuario from comics;

insert into comics(nombre, impresion, sinopsis, editorial, emailUsuario) 
values ("Batman", "2008",
 "Batman es la identidad secreta de Bruce Wayne, un empresario multimillonario, galán y filántropo. Presenció el asesinato de sus padres cuando era niño lo marcó profundamente y lo llevó a entrenarse en la perfección física e intelectual para ponerse un disfraz de murciélago con el fin de combatir el crimen.", "DC Comics", "admin1@bd.com");
 
 
 