import { EntityRepository, Repository } from "typeorm";
import { TipoMateria } from "../entity/DocenteMateria";
import { MesaExamen } from "../entity/MesaExamen";






    @EntityRepository(MesaExamen)
    export class MesaExamenRepository extends Repository<MesaExamen>{


        findMesaExamenPorDocente(id:number,tipo:string){
            
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
                        //alumno:"me.inscriptos"
                    },
                    
                },
                where:(qb:any)=>{
                    qb.where("d.id=:id",{id:id})
                    .andWhere("docenteMateria.tipo=:tipo",{tipo:tipo})
                
                }
            });
                }


                //Obtener lista de mesas de examen de un docente
                findMesasDeExamen(){
                    return this.createQueryBuilder("mesas")
                        .innerJoinAndSelect("mesas.materia","materia")
                        .innerJoinAndSelect("materia.docentes","docenteMateria","docenteMateria.cicloLectivo=:cl",{cl:2021})
                        .innerJoinAndSelect("docenteMateria.docente","docente","docente.id=:id",{id:2})
                        .select(["docente.nombre","docente.apellido","materia.nombre","mesas.fecha","docenteMateria.tipo"])
                        .getMany()
                }

    }


    

  










