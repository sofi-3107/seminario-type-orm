import "reflect-metadata";
import {createConnection} from "typeorm";
import { isDataView } from "util/types";
import { Alumno } from "./entity/Alumno";
import { AlumnoMateria } from "./entity/AlumnoMateria";
import { Materia } from "./entity/Materia";

import {AlumnoRepository } from "./repository/AlumnoRepository";
import { MateriaRepository } from "./repository/MateriaRepository";

createConnection().then(async connection => {

  

}).catch(error => console.log(error));
