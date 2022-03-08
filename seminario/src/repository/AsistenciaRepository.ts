import { EntityRepository, Repository } from "typeorm";
import { Asistencia } from "../entity/Asistencia";

@EntityRepository(Asistencia)
export class AsistenciaRepository extends Repository<Asistencia>{

    findByAlumno(id:number,cicloLectivo:number){
        return this.find({
            join:{
                alias:"as",
                innerJoinAndSelect:{
                    alumno:"as.alumno"
                }
            },
            where:(qb:any)=>{qb
                .where("as.cicloLectivo=:cl",{cl:cicloLectivo})
                .andWhere("alumno.id=:idA",{idA:id});
            }
        });
    }

}