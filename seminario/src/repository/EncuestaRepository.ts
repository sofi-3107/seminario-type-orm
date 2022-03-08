import { EntityRepository, Repository } from "typeorm";
import { Encuesta } from "../entity/Encuesta";

@EntityRepository(Encuesta)
export class EncuestaRepository extends Repository<Encuesta>{
    
    
    public traerEncuestaPorDocenteYMaterias(id:number,cicloLectivo:number) {
  
            
             return  this.find({
                join:{
                    alias:"en",
                    innerJoinAndSelect:{
                        pregunta:"en.pregunta",
                        docenteMateria:"en.docenteMateria",
                        materia:"docenteMateria.materia",
                        d:"docenteMateria.docente"
                    }
                },
                where:(qb:any)=>{qb
                    .where("d.id=:id",{id:id})
                    .andWhere("docenteMateria.cicloLectivo=:cl",{cl:cicloLectivo});
                }
            })

    }

    //Acceso del alumno a las encuestas por materia
     traerEncuestaPorCursoYMaterias(idCurso:number,cicloLectivo:number) {

              return this.find({
                join:{
                    alias:"en",
                    innerJoinAndSelect:{
                        pregunta:"en.pregunta",
                        docenteMateria:"en.docenteMateria",
                        materia:"docenteMateria.materia",
                        curso:"materia.cursos"
                    }
                },
                where:(qb:any)=>{
                   qb.where("curso.id=:id",{id:idCurso})
                     .andWhere("curso.cicloLectivo=:cl",{cl:cicloLectivo});
                }
            });

  
    }

}