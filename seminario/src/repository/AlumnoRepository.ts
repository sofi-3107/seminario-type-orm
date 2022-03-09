import { EntityRepository, Repository } from "typeorm";
import { Alumno } from "../entity/Alumno";

@EntityRepository(Alumno)
export class AlumnoRepository extends Repository<Alumno>{
    
    findByNombre(nombre:string){
        return this.findOne({nombre});
    }

    //Lista de alumnos de cada curso con acceso a las asistencias de x periodo lectivo
    // Si alguna de las entidades del join no tiene datos el innerJoin devuelve []
    findByCurso(idCurso:number,cicloLectivo:number){

        return this.find({
            join:{
                alias:"al",
                innerJoinAndSelect:{
                    asistencias:"al.asistencias",
                    curso:"al.cursoInscripciones"
                }
            },
            where:(qb:any)=>{
                qb
                .where("curso.id=:id",{id:idCurso})
                .andWhere("curso.cicloLectivo=:c",{c:cicloLectivo})             
            }
        });

       
    }
    //Lista de Alumnos con acceso a sus notas de cada materia en x periodo lectivo
    findNotasMaterias(idCurso:number,cl:number,trimestre:number){
        return this.find({
            join:{
                alias:"al",
               innerJoinAndSelect:{
                    nota:"al.notas",
                    materia:"nota.materia",
                    curso:"materia.cursos"
                }
            },
            //Usar nombre diferente en las variables id,cl,t no id en todo
            where:(qb:any)=>{qb
                    .where("nota.cicloLectivo=:cL",{cL:cl})
                    .andWhere("nota.trimestre=:t",{t:trimestre})
                    .andWhere("curso.id=:id",{id:idCurso})
            }
        });
    }

    //Acceder a la libreta, o notas de un alumno en particular de una materia en particular
    findAlumnoByNotasMaterias(idAlumno:number,cl:number,trimestre:number){

        return this.findOne({
            join:{
                alias:"al",
            innerJoinAndSelect:{
                    nota:"al.notas",
                    materia:"nota.materia",                   
                }
            },
            //Usar nombre diferente en las variables id,cl,t no id en todo
            where:(qb:any)=>{qb
                    .where("nota.cicloLectivo=:cL",{cL:cl})
                    .andWhere("nota.trimestre=:t",{t:trimestre})
                    .andWhere("al.id=:id",{id:idAlumno})
            }
        });
    }
}


