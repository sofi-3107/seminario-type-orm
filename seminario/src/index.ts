import "reflect-metadata";
import {createConnection, getCustomRepository} from "typeorm";
import express from "express";
import cors from "cors";
import docenteRouter from "./routes/docente.routes";
import { NotasRepository } from "./repository/NotasRepository";
import alumnoRouter from "./routes/alumno.routes";
import preceptorRouter from "./routes/preceptor.routes";

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
   /* const cantidadAprobados=await getCustomRepository(NotasRepository).getCantidadAlumnosAprobadosODesaprobados(2022,3,2,1,'<6');
        console.log(cantidadAprobados);*/
        

    const cantMateriasAprobAlumno1= await getCustomRepository(NotasRepository).getCantidadMateriasAprobadasODesaprobadas(2022,1,5,'>=6');
    //cantMateriasAprobAlumno1.forEach((e)=>console.log(e))
    console.log("cant materias aprobadas: "+cantMateriasAprobAlumno1);
 
}).catch(error => console.log(error));


app.listen(3000,()=>console.log('Server up!!'));
