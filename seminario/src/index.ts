import "reflect-metadata";
import {createConnection, getCustomRepository} from "typeorm";
import express from "express";
import cors from "cors";
import docenteRouter from "./routes/docente.routes";
import { MesaExamenRepository } from "./repository/MesaExamenRepository";

//import morgan from "morgan";

const app=express();

//middelwares
app.use(cors());
//app.use(morgan('dev'));
app.use(express.json());

//Rutas

app.use('/docente',docenteRouter);


createConnection().then(async connection => {

   const meRep= getCustomRepository(MesaExamenRepository);

    const mesas= await meRep.findMesasDeExamen(1,2021);

   console.log(mesas);
    mesas.forEach(m=>console.log(m))
 
}).catch(error => console.log(error));


app.listen(3000,()=>console.log('Server up!!'));
