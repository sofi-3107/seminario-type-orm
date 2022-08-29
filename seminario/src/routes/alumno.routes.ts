import {Router} from "express";
import { getAsistencia, getCantMateriasAprobadasyDesaprobadas, getDatosAsistenciaInasistencias, getLibreta, getMateriasPendientes, getMesasDisponibles } from "../controllers/alumno.controller";

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
//Objeto asistencia para ver cuantas inasistencias y llegadas tarde tiene
alumnoRouter.get('/asistencia-resumen/:alumno/:cl',getAsistencia);
export default alumnoRouter;