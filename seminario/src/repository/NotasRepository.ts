import { EntityRepository, Repository } from "typeorm";
import { Nota } from "../entity/Nota";

@EntityRepository(Nota)


export class NotasRepository extends Repository<Nota>{
    //Para Docente
    findNotaAlumnos(alumno:number,materia:number,anio:number,tipo:string,trimestre:number){
        return this.createQueryBuilder("n")
            .innerJoinAndSelect("n.materia","materia","materia.id=:materia",{materia:materia})
            .innerJoinAndSelect("n.alumno","alumno","alumno.id=:alumno",{alumno:alumno})
            .select(["n.trimestre","n.calificacion","n.condicionMateria","alumno.apellido","alumno.nombre","materia.nombre"])
            .where("n.cicloLectivo=:cl AND n.tipo=:tipo AND n.trimestre=:trimestre",{cl:anio,tipo:tipo,trimestre:trimestre})
            .getOne();
    }
    findNotasAlumnos(alumno:number,materia:number,anio:number,tipo:string){
        return this.createQueryBuilder("n")
            .innerJoinAndSelect("n.materia","materia","materia.id=:materia",{materia:materia})
            .innerJoinAndSelect("n.alumno","alumno","alumno.id=:alumno",{alumno:alumno})
            .select(["n.trimestre","n.calificacion","n.condicionMateria","alumno.apellido","alumno.nombre","materia.nombre"])
            .where("n.cicloLectivo=:cl AND n.tipo=:tipo ",{cl:anio,tipo:tipo})
            .getMany();
    }
    //Para Alumno
    findNotasAlumno(alumno:number,anio:number,tipo:string){
        return this.createQueryBuilder("n")
            .innerJoinAndSelect("n.materia","materia")
            .innerJoinAndSelect("n.alumno","alumno","alumno.id=:alumno",{alumno:alumno})
            .select(["n.trimestre","n.calificacion","n.condicionMateria","alumno.apellido","alumno.nombre","materia.nombre"])
            .where("n.cicloLectivo=:cl AND n.tipo=:tipo",{cl:anio,tipo:tipo})
            .getMany();
    }

    //Cuenta la cantidad de alumnos desaprobados o aprobados de una materia en particular, para la app docente

    getCantidadAlumnosAprobados(cl:number,materia:number,trimestre:number,curso:number){
           
        return this.createQueryBuilder("n")
            .innerJoin("n.alumno","alumno")
            .innerJoin("n.materia","materia")
            .innerJoin("materia.docentes","docenteMateria")
            .innerJoin("docenteMateria.curso","curso")
            .innerJoin("docenteMateria.docente","docente")
            .select(["curso.id","alumno.id","n.calificacion","materia.id","docenteMateria","docenteMateria.curso","docenteMateria.docente"])
            .where("curso.id=:curso AND materia.id=:mat AND n.cicloLectivo=:cl AND n.trimestre=:t",{t:trimestre,cl:cl,curso:curso,mat:materia})
            .getMany()


    }
}