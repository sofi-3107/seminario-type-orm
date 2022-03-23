import "reflect-metadata";
import {createConnection, getCustomRepository} from "typeorm";
import express from "express";
import cors from "cors";
import docenteRouter from "./routes/docente.routes";
import { MesaExamenRepository } from "./repository/MesaExamenRepository";
import { TipoMesa } from "./entity/MesaExamen";
import preceptorRouter from "./routes/preceptor.router";
import alumnoRouter from "./routes/alumno.routes";

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

  
 
}).catch(error => console.log(error));


app.listen(3000,()=>console.log('Server up!!'));
