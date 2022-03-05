import { EntityRepository, Repository } from "typeorm";
import { Alumno } from "../entity/Alumno";
import { AlumnoMateria } from "../entity/AlumnoMateria";
import { Materia } from "../entity/Materia";

@EntityRepository(Materia)
export class MateriaRepository extends Repository<Materia>{

    findBMateriasPorAlumnoAndAnio (id:number,anio:number){
        return  this.createQueryBuilder("m")
        .innerJoinAndSelect(AlumnoMateria,"am","m.id=am.materia")
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

    findMateriasPropiasConAlumnos(){
    //1º Recuperar las materias propias con la lista de alumnos en cada una y recien acceder a las notas
    
     return this.find({
        join:{
            alias:"m",
            innerJoinAndSelect:{
                docenteMateria:"m.docentes",
                docente:"docenteMateria.docente",
                nota:"m.notas",
                alumno:"nota.alumno"
            },
        },
        where:(qb:any)=>{
                qb.where("docente.id=:id",{id:1})
        }
    });
    }





    /*findMateriaByAlumnoThird(){
        return this.find({
            relations:["materiaAlumnos","materiaAlumnos.alumno"], 
            where:{
                materiaAlumnos:{
                    alumno:{
                        id:1
                    }
                }
            }          
    });
    }*/


}