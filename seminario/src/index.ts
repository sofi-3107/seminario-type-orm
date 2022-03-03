import "reflect-metadata";
import {createConnection} from "typeorm";
import { isDataView } from "util/types";
import { Alumno } from "./entity/Alumno";
import { AlumnoMateria } from "./entity/AlumnoMateria";
import { Materia } from "./entity/Materia";

import {AlumnoRepository } from "./repository/AlumnoRepository";
import { MateriaRepository } from "./repository/MateriaRepository";

createConnection().then(async connection => {
    
    const alumnoRepository=connection.getRepository(Alumno);
    const materiaRepository=connection.getRepository(Materia);
    const customMatRep=connection.getCustomRepository(MateriaRepository);

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

  // const materiasAlumno1=await materiaRepository.find({relations:["materiaAlumnos"]});
  const al= await alumnoRepository.findOne({id:1});
  const materiasAlumno=await customMatRep.findMateriaByAlumnoSecond(2);

   materiasAlumno.map(m=>console.log(m));
  //console.log(materiasAlumno1)
  

}).catch(error => console.log(error));
