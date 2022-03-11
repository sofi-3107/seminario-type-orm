import {Router} from "express";
import { cargarNotasAlumnos, getAlumnosPorMateria, getMateriasAndCurso, getMesasDeExamen } from "../controllers/docente.controller";

const docenteRouter=Router();

//Menu del Drawer
docenteRouter.get('/materias/:id/:cl/:tipo',getMateriasAndCurso);
//Lista de alumnos de una materia elegida del menu
docenteRouter.get('/alumnos/:docente/:materia/:cl',getAlumnosPorMateria);
//Guarda las notas
docenteRouter.post('/calificar',cargarNotasAlumnos);
//Mesas de Examen en Drawer
docenteRouter.get('/mesas/:id/:tipo',getMesasDeExamen);



export default docenteRouter;