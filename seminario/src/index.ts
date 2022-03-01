import "reflect-metadata";
import {createConnection} from "typeorm";
import { isDataView } from "util/types";
import { Alumno } from "./entity/Alumno";
import { AlumnoMateria } from "./entity/AlumnoMateria";
import { Materia } from "./entity/Materia";
import {User} from "./entity/User";
import {AlumnoRepository } from "./repository/AlumnoRepository";

createConnection().then(async connection => {
    
    const alumnoRepository=connection.getRepository(Alumno);
    const materiaRepository=connection.getRepository(Materia);

   /* const lengua=new Materia;
    lengua.nombre="Lengua I";
    const matematica=new Materia;
    matematica.nombre="Matematica I";
    materiaRepository.save(lengua);
    materiaRepository.save(matematica);*/

  
   /*const alumnos=await alumnoRepository
   .createQueryBuilder('alumno')
   .where('alumno.apellido=:apellido',{apellido:'Perez'})
   .andWhere('alumno.nombre=:nombre',{nombre:'Juan'})
   .getOne();*/

   const materiasAlumno1=await materiaRepository.find({relations:["materiaAlumnos"]});

   /**Obtener listado de materias por alumno, en el ciclo lectivo correspondiente */
   const materiasAlumno=await materiaRepository
   .createQueryBuilder("m")
   .innerJoinAndSelect(AlumnoMateria,"am","m.id=am.materia")
   .innerJoinAndSelect(Alumno,"a","a.id=am.alumno")
   .where("a.id=:id",{id:2})
   .andWhere("am.cicloLectivo=:anio",{anio:2021})
   .getMany()

   


  materiasAlumno.map(m=>console.log(m.notas));
  //console.log(materiasAlumno1)

}).catch(error => console.log(error));
