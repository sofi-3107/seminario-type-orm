import {Router} from "express";
import { getAlumnosPorCurso, getCursosByPreceptor, getInasistenciasAlumnosCurso, tomarAsistencia } from "../controllers/preceptor.controller";

const preceptorRouter=Router();

//Cursos del Menu del Drawer

preceptorRouter.get("/cursos/:id",getCursosByPreceptor);

//Lista de alumnos por cada curso para tomar asistencia o mandar sms
preceptorRouter.get("/alumnos/:curso/:cl",getAlumnosPorCurso);

preceptorRouter.post("/toma-asistencia/",tomarAsistencia);

//Alumnos de un curso con sus inasistencias

preceptorRouter.get('/inasistencias/:curso/:cl',getInasistenciasAlumnosCurso);




export default preceptorRouter;