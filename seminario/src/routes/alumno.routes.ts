import {Router} from "express";
import { getLibreta, getMateriasPendientes, getMesasDisponibles } from "../controllers/alumno.controller";

const alumnoRouter=Router();

//Consulta de Libreta
alumnoRouter.get('/libreta/:alumno/:materia/:anio/:tipo',getLibreta);
//Materias Pendientes
alumnoRouter.get('/pendientes/:alumno/:cl',getMateriasPendientes);
//Mesas de Examen disponibles
alumnoRouter.get('/inscribirMesaExamen/:alumno/:cl/:condicion/:tipo',getMesasDisponibles)

export default alumnoRouter;