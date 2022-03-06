import { EntityRepository, Repository } from "typeorm";
import { TipoMateria } from "../entity/DocenteMateria";
import { MesaExamen } from "../entity/MesaExamen";






    @EntityRepository(MesaExamen)
    export class MesaExamenRepository extends Repository<MesaExamen>{


        findMesaExamenPorDocente(id:number){
            
             //Lista de mesas de examen con sus materias  y alumnos
        return this.find({
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
                    qb.where("d.id=:id",{id:id})
                    .andWhere("docenteMateria.tipo=:tipo",{tipo:TipoMateria.MESA_EXAMEN_REGULAR})
                
                }
            });
                }

    }










