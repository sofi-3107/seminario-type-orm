import {Router} from "express";
import { getCantMateriasAprobadasyDesaprobadas, getDatosAsistenciaInasistencias, getLibreta, getMateriasPendientes, getMesasDisponibles } from "../controllers/alumno.controller";

const alumnoRouter=Router();

//Consulta de Libreta
alumnoRouter.get('/libreta/:alumno/:anio/:tipo',getLibreta);
//Materias Pendientes
alumnoRouter.get('/pendientes/:alumno/:cl',getMateriasPendientes);
//Mesas de Examen disponibles
alumnoRouter.get('/inscribirMesaExamen/:alumno/:cl/:condicion/:tipo',getMesasDisponibles)
//Cant Asistencias Inasistencias para el grafico
alumnoRouter.get('/asistencia-grafico/:alumno/:cl',getDatosAsistenciaInasistencias);
// Cant Materias aprobadas y desaprobadas Grafico
alumnoRouter.get('/materias-grafico/:alumno/:cl',getCantMateriasAprobadasyDesaprobadas);
export default alumnoRouter;