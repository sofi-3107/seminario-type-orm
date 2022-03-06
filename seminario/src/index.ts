import "reflect-metadata";
import {createConnection} from "typeorm";
import { TipoMateria } from "./entity/DocenteMateria";
import { Encuesta } from "./entity/Encuesta";
import { MesaExamen } from "./entity/MesaExamen";
import { EncuestaRepository } from "./repository/EncuestaRepository";


createConnection().then(async connection => {

   
     // Traer encuestas por docente y cada una de sus materias

   const enRep=await connection.getCustomRepository(EncuestaRepository);

   const res=await enRep.traerEncuestaPorDocenteYMaterias(2);

   console.log(res);
     


}).catch(error => console.log(error));
