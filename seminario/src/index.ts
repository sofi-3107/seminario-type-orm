import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import cors from "cors";
import docenteRouter from "./routes/docente.routes";
import { Alumno } from "./entity/Alumno";
import { Curso } from "./entity/Curso";
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

  const meRep= connection.getCustomRepository(MesaExamenRepository);

  const mesas=await meRep.findMesasDeExamen();

  mesas.forEach(m => {
    console.log(m.materia.nombre+" "+m.fecha+" "+m.horaInicio+" "+m.materia.docentes[0].tipo);
  });

    
  /*  const curso=await connection.getRepository(Curso).findOne({id:1});

  

    const alumno=new Alumno();
    alumno.apellido='Castro';
    alumno.nombre='Francisco';
    alumno.dni='125963654';
    alumno.email='fco@gmail.com',
    alumno.cursoInscripciones=[];
    alumno.cursoInscripciones.push(curso!);
   
connection.getRepository(Alumno).create(alumno);
connection.getRepository(Alumno).save(alumno); */

}).catch(error => console.log(error));


app.listen(3000,()=>console.log('Server up!!'));
