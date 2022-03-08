import {Router} from "express";
import { getAlumnosPorMateria } from "../controllers/docente.controller";

const docenteRouter=Router();

docenteRouter.get('/alumnos/:idDocente/:idMateria',getAlumnosPorMateria);


export default docenteRouter;