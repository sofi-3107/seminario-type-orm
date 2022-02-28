import "reflect-metadata";
import {createConnection} from "typeorm";
import { Alumno } from "./entity/Alumno";
import { Materia } from "./entity/Materia";
import {User} from "./entity/User";

createConnection().then(async connection => {
    
    const alumnoRepository=connection.getRepository(Alumno);
    const materiaRepository=connection.getMongoRepository(Materia);

  
   /*const alumnos=await alumnoRepository
   .createQueryBuilder('alumno')
   .where('alumno.apellido=:apellido',{apellido:'Perez'})
   .andWhere('alumno.nombre=:nombre',{nombre:'Juan'})
   .getOne();*/

   console.log();

}).catch(error => console.log(error));
