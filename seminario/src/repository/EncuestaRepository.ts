import { EntityRepository, Repository } from "typeorm";
import { Encuesta } from "../entity/Encuesta";

@EntityRepository(Encuesta)
export class EncuestaRepository extends Repository<Encuesta>{
    
    //Devuelve los registros de encuesta con la cantidad de cada pregunta pra x docente y materia en cicloLectivo indicado
    getCantidadEnuestaDocenteMateria(cl:number,docente:number,materia:number){
        return this.createQueryBuilder("e")
            .innerJoin("e.docenteMateria","docenteMateria")
            .innerJoin("docenteMateria.docente","docente")
            .innerJoin("docenteMateria.materia","materia")
            .innerJoin("e.pregunta","pregunta")
            .select(["pregunta.id","e.cantidad"])
            .where("e.cicloLectivo=:cl AND materia.id=:materia AND docente.id=:docente",{cl:cl,docente:docente,materia:materia} )
            .groupBy("pregunta.id")
            .getMany();         
    }



}