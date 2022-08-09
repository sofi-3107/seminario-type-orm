import { EntityRepository, Repository } from "typeorm";
import { Alumno } from "../entity/Alumno";

@EntityRepository(Alumno)
export class AlumnoRepository extends Repository<Alumno>{
    

    //Lista de alumnos de cada curso con acceso a las asistencias de x periodo lectivo

    findByCurso(idCurso:number,cicloLectivo:number){
        return this.createQueryBuilder("al")
            .innerJoin("a.cursos","alumnoCurso")
            .innerJoin("alumnoCurso.curso","curso")
            .innerJoin("a.asistencia","asistencia")
            .select(["a.apellido","a.nombre","curso.id"])
            .where("curso.id=:cid AND alumnoCurso.cicloLectivo=:cl",{cid:idCurso,cl:cicloLectivo})
            .getMany();
    }


    findAlumnosPorCadaMateria(docente:number,materia:number,cl:number){
        return this.createQueryBuilder("a")
            .leftJoin("a.cursos","alumnoCurso")
            .leftJoin("alumnoCurso.curso","curso")
            .leftJoin("curso.docenteMaterias","docenteMateria")
            .leftJoin("docenteMateria.docente","docente")
            .leftJoin("docenteMateria.materia","materia")
            .select(["a.id","a.apellido","a.nombre","docente.id","materia.id","docenteMateria.cicloLectivo"])
            .where("docente.id=:did AND materia.id=:mid AND docenteMateria.cicloLectivo=:clid",{did:docente,mid:materia,clid:cl})
            .getMany();

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
    //Lista de Alumnos por curso para guardar su asistencia, para el envio de sms 
    findAlumnosPorCursoAsistencia(curso:number,cl:number,fecha:string){
        return this.createQueryBuilder("a")
                    .leftJoin("a.cursos","cursos","cursos.cicloLectivo=:cl",{cl:cl})
                    .innerJoin("cursos.curso","curso","curso.id=:curso",{curso:curso})
                    .leftJoin("a.asistencias","asistencia","asistencia.fecha=:f",{f:fecha})
                    .leftJoin("a.tutor","tutor") 
                    .select(["a.id","a.nombre","a.apellido","tutor.nombre","tutor.apellido","tutor.telefono","curso.id","cursos.cicloLectivo","asistencia.fecha","asistencia.estado"])
                    .getMany();
    }





}


