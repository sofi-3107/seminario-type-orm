import {Router} from "express";
import { cargarNotasAlumnos, getAllAlumnos, getMateriasAndCurso, getMateriasConAlumnos } from "../controllers/docente.controller";

const docenteRouter=Router();

docenteRouter.get('/alumnos/:idDocente/:idMateria',getMateriasConAlumnos);
docenteRouter.post('/calificar',cargarNotasAlumnos);
docenteRouter.get('/alumnos',getMateriasAndCurso);


export default docenteRouter;