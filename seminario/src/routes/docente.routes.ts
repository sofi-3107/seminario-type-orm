import {Router} from "express";
import { cargarNotasAlumnos, getAlumnosPorMateria, getMateriasAndCurso } from "../controllers/docente.controller";

const docenteRouter=Router();

//Menu del Drawer
docenteRouter.get('/materias/:id/:cl/:tipo',getMateriasAndCurso);
//Lista de alumnos de una materia elegida del menu
docenteRouter.get('/alumnos/:docente/:materia/:cl',getAlumnosPorMateria);
docenteRouter.post('/calificar',cargarNotasAlumnos);



export default docenteRouter;