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
}