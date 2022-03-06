import { EntityRepository, Repository } from "typeorm";
import { Encuesta } from "../entity/Encuesta";

@EntityRepository(Encuesta)
export class EncuestaRepository extends Repository<Encuesta>{
    

    public traerEncuestaPorDocenteYMaterias(id:number) {
        
        try {
            
             const encuestas=  this.find({
                join:{
                    alias:"en",
                    innerJoinAndSelect:{
                        pregunta:"en.pregunta",
                        docenteMateria:"en.docenteMateria",
                        materia:"docenteMateria.materia",
                        d:"docenteMateria.docente"
                    }
                },
                where:(qb:any)=>{
                   qb.where("d.id=:id",{id:id});
                }
            })

            //encuestas==null? "No hay datos": encuestas;
            return encuestas||"No hay datos";
            
        } catch (error) {
            console.log(error);
        }
    }
}