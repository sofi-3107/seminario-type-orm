import "reflect-metadata";
import {createConnection} from "typeorm";
import { TipoMateria } from "./entity/DocenteMateria";
import { MesaExamen } from "./entity/MesaExamen";


createConnection().then(async connection => {

    //Lista de mesas de examen con sus materias  y alumnos
         const meRep=await connection.getRepository(MesaExamen);

    const mesasExamenPorDocente= await meRep.find({
        //Los de la izquierda son alias y los de la derecha la navegacion entre entidades
        //Al buscar un id docente que no existe se tilda
        join:{
            alias:"me",
            innerJoinAndSelect:{
                materia:"me.materia",
                docenteMateria:"materia.docentes",
                d:"docenteMateria.docente",
                alumno:"me.inscriptos"
            },
            
        },
        where:(qb:any)=>{
            qb.where("d.id=:id",{id:1})
            .andWhere("docenteMateria.tipo=:tipo",{tipo:TipoMateria.MESA_EXAMEN_REGULAR})
           
        }
    });

    /*const result= await meRep.find({
        relations:["materia","materia.docentes","materia.docentes.docente"],
        where:(qb)=>{
             qb.where("docente.id=:id",{id:2})
            //.andWhere("materia.docentes.tipo=:tipo",{tipo:TipoMateria.MESA_EXAMEN_REGULAR})
        }
    });*/
  

   

    mesasExamenPorDocente.map(me=>console.log(me));


}).catch(error => console.log(error));
