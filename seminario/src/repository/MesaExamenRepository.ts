import { EntityRepository, Repository } from "typeorm";
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
                findMesasDeExamen(docente:number,anio:number,tipo:string){
                    return this.createQueryBuilder("mesa")
                        .innerJoinAndSelect("mesa.materia","materia")
                        .innerJoinAndSelect("mesa.docentesMesa","docentesMesa")
                        .innerJoinAndSelect("docentesMesa.docente","docente","docente.id=:id",{id:docente})
                        .select(["materia.nombre","mesa.fecha","mesa.anio","docentesMesa.docenteId","docente.nombre"])                     
                        .where("mesa.tipo=:tipo AND mesa.anio=:anio",{tipo:tipo,anio:anio})
                        .getMany()
                }

                //Mesa de examen en particular con listado de alumnos 

                findMesaDeExamenById(mesa:number,anio:number){
                    return this.createQueryBuilder("mesa")
                        .innerJoinAndSelect("mesa.materia","materia")
                        .innerJoinAndSelect("mesa.inscriptos","alumnos")
                        .select(["mesa.fecha","mesa.horaInicio","mesa.horaFin","materia.nombre","alumnos.id","alumnos.apellido","alumnos.nombre"])
                        .where("mesa.id=:mesa AND mesa.anio=:anio",{mesa:mesa,anio:anio})
                        .getOne()
                }

    }


    

  










