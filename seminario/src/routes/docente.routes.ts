import {Router} from "express";
import { cargarNotasAlumnos, getAlumnosPorMateria, getMateriasAndCurso, getMesasDeExamen, getMesaUnica } from "../controllers/docente.controller";

const docenteRouter=Router();

//Menu del Drawer
docenteRouter.get('/materias/:id/:cl',getMateriasAndCurso);
//Lista de alumnos de una materia elegida del menu
docenteRouter.get('/alumnos/:docente/:materia/:cl',getAlumnosPorMateria);
//Guarda las notas
docenteRouter.post('/calificar',cargarNotasAlumnos);
//Mesas de Examen en Drawer
docenteRouter.get('/mesas/:id/:tipo/:anio',getMesasDeExamen);
//ver una mesa de examen en particular con alumnos inscriptos
docenteRouter.get('/mesa/:id/:anio',getMesaUnica);


export default docenteRouter;