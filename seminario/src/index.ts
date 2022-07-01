import "reflect-metadata";
import {createConnection, getCustomRepository, getRepository} from "typeorm";
import express from "express";
import cors from "cors";
import docenteRouter from "./routes/docente.routes";
import { NotasRepository } from "./repository/NotasRepository";
import alumnoRouter from "./routes/alumno.routes";
import preceptorRouter from "./routes/preceptor.routes";
import { Encuesta } from "./entity/Encuesta";
import { EncuestaRepository } from "./repository/EncuestaRepository";
import { AlumnoRepository } from "./repository/AlumnoRepository";

//import morgan from "morgan";

const app=express();

//middelwares
app.use(cors());
//app.use(morgan('dev'));
app.use(express.json());

//Rutas

app.use('/docente',docenteRouter);
app.use('/preceptor',preceptorRouter);
app.use('/alumno',alumnoRouter);


createConnection().then(async connection => {

    const alumnosPedrazaIngles=await getCustomRepository(AlumnoRepository).findAlumnosPorCadaMateria(1,11,2022);
    alumnosPedrazaIngles.forEach(console.log);
    console.log('resultado longitud arreglo: '+alumnosPedrazaIngles.length)
}).catch(error => console.log(error));


app.listen(3000,()=>console.log('Server up!!'));
