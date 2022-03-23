import {Router} from "express";
import { getAlumnosPorCurso, getCursosByPreceptor, tomarAsistencia } from "../controllers/preceptor.controller";

const preceptorRouter=Router();

//Cursos del Menu del Drawer

preceptorRouter.get("/cursos/:id",getCursosByPreceptor);

//Lista de alumnos por cada curso para tomar asistencia o mandar sms
preceptorRouter.get("/alumnos/:curso/:cl",getAlumnosPorCurso);

preceptorRouter.post("/toma-asistencia/",tomarAsistencia);




export default preceptorRouter;