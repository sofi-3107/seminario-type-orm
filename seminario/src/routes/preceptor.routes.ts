import {Router} from "express";
import { getAlumnosPorCurso, getCursosByPreceptor, getInasistenciasAlumnosCurso, getNotasAlumnoCursoTodasMaterias, tomarAsistencia } from "../controllers/preceptor.controller";

const preceptorRouter=Router();

//Cursos del Menu del Drawer

preceptorRouter.get("/cursos/:id",getCursosByPreceptor);

//Lista de alumnos por cada curso para tomar asistencia o mandar sms
preceptorRouter.get("/alumnos/:curso/:cl",getAlumnosPorCurso);

//guarda asistencia diaria
preceptorRouter.post("/toma-asistencia/",tomarAsistencia);

//Alumnos de un curso con sus inasistencias

preceptorRouter.get('/inasistencias/:curso/:cl',getInasistenciasAlumnosCurso);

//Notas de un curso entero todas las materias para el grafico de barras 
preceptorRouter.get('/notas/:curso/:cl/:trimestre/:condicion',getNotasAlumnoCursoTodasMaterias);


export default preceptorRouter;