import "reflect-metadata";
import {createConnection} from "typeorm";
import { TipoMateria } from "./entity/DocenteMateria";
import { Encuesta } from "./entity/Encuesta";
import { MesaExamen } from "./entity/MesaExamen";
import { AlumnoRepository } from "./repository/AlumnoRepository";
import { EncuestaRepository } from "./repository/EncuestaRepository";


createConnection().then(async connection => {

   
     // Traer encuestas por docente y cada una de sus materias

   const Rep=await connection.getCustomRepository(AlumnoRepository);

   const res=await Rep.findNotasMaterias(1,2021,1);

   res.map(r=>console.log(r.notas));
     


}).catch(error => console.log(error));
