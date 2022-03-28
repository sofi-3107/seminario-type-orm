import { EntityRepository, Repository } from "typeorm";
import { Alumno } from "../entity/Alumno";
import { Materia } from "../entity/Materia";

@EntityRepository(Materia)
export class MateriaRepository extends Repository<Materia>{


    findBMateriasPorAlumnoAndAnio (id:number,anio:number){
        return  this.createQueryBuilder("m")
       // .innerJoinAndSelect(AlumnoMateria,"am","m.id=am.materia")
        .innerJoinAndSelect(Alumno,"a","a.id=am.alumno")
        .where("a.id=:id",{id:id})
        .andWhere("am.cicloLectivo=:anio",{anio:anio})
        .getMany()
    }

    findMateriaByAlumnoSecond(id:number){
        return this.find({
            join:{
                alias:"m",
                innerJoinAndSelect:{
                    materiaAlumnos:"m.materiaAlumnos",
                    alumno:"materiaAlumnos.alumno",
                }
            },
            where:(qb:any)=>{
                qb.where('alumno.id=:id',{id:id})
            }
            
    });
    }


    //Acceso del alumno a sus notas
    findMateriasConNotasDeUnAlumno(id:number,cl:number){
        return this.find({
            join:{
                alias:"m",
                innerJoinAndSelect:{
                    alumnoMateria:"m.materiaAlumnos",
                    alumno:"alumnoMateria.alumno",
                    nota:"m.notas"
                }
            },
            where:(qb:any)=>{qb
                .where("alumno.id=;id",{id:id})
                .andWhere("alumnoMateria.cicloLectivo=:cl",{cl:cl});
            }
        });
    }

    //Obtiene las materias de cada docente con sus respectivos cursos
    findMateriasConCurso(idDocente:number,cl:number){
        return this.find({
            join:{
                alias:"m",
                innerJoinAndSelect:{
                    docentes:"m.docentes",
                    docente:"docentes.docente",
                    curso:"m.curso",
                    cursoOrg:"curso.cursos"
                }
            },
            where:(qb:any)=>{
                qb
                    .where("docente.id=:id",{id:idDocente})
                    .andWhere("docentes.cicloLectivo=:cl",{cl:cl})
            }
        });
    }


    findMateriasPropias(docente:number,cl:number){
        return this.createQueryBuilder("m")
            .innerJoinAndSelect("m.docentes","docentes","docentes.cicloLectivo=:cl",{cl:cl})
            .innerJoinAndSelect("docentes.docente","docente","docente.id=:id",{id:docente})
            .innerJoinAndSelect("m.curso","curso")
            .innerJoinAndSelect("curso.cursos","cursos")
            .select(["m.id","m.nombre","docentes.docente","docente.id","curso.nivel","curso.ciclo","cursos.turno","cursos.division"])
            .getMany()
    }

    getMateriasPendientesAlumno(alumno:number,cl:number){
        return this.createQueryBuilder("m")
                    .innerJoinAndSelect("m.notas","notas","notas.cicloLectivo=:cl",{cl:cl})
                    .innerJoinAndSelect("notas.alumno","alumno","alumno.id=:alumno",{alumno:alumno})
                    .where("m.condicionMateria=:pendiente" )
                    .getMany()
    }






}