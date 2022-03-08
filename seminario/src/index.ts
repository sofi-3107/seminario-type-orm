import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import docenteRouter from "./routes/docente.routes";

const app=express();

//middelwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Rutas

app.use('/docente',docenteRouter);


createConnection().then(async connection => {
}).catch(error => console.log(error));
