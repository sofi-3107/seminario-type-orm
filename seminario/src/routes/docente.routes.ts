import {Router} from "express";
import { getMateriasConAlumnos } from "../controllers/docente.controller";

const docenteRouter=Router();

docenteRouter.get('/alumnos/:idDocente/:idMateria',getMateriasConAlumnos);


export default docenteRouter;