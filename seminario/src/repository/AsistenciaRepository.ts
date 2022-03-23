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


    //Recuperar cantidad de inasistencias de cada alumno ALUMNO APP

    getCantidadInasistenciasAlumno(alumno:number,cl:number){
        return this.query(`SELECT count(a.fecha) FROM asistencia AS a 
        JOIN alumno AS al ON a.alumnoId=al.id
        WHERE al.id=${alumno} AND a.estado='ausente' AND a.cicloLectivo=${cl}`);
    }

    //Recuperar cantidad de inasistencias de alumnos de un curso PRECEPTOR APP

    getCantidadInasistenciasCurso(curso:number,cl:number){
        return this.createQueryBuilder("a")
                    .innerJoinAndSelect("a.alumno","alumno")
                    .innerJoinAndSelect("alumno.cursos","cursos","cursos.cicloLectivo=:cl",{cl:cl})
                    .innerJoinAndSelect("cursos.curso","curso","curso.id=:curso",{curso:curso})
                    .groupBy("alumno.apellido")
                    .getMany()
    }

}