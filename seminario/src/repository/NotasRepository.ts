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

    //Devuelve la cantidad de alumnos aprobados o desaprobados por materia de x docente para x trimestre y x ciclo lectivo
    getCantidadAlumnosAprobadosODesaprobados(cl:number,materia:number,docente:number,trimestre:number,condicion:string){
        return this.createQueryBuilder("n")
            .innerJoinAndSelect("n.materia","materia")
            .innerJoinAndSelect("n.docente","docente")
            .where(`n.trimestre=:t AND n.cicloLectivo=:cl AND materia.id=:m AND docente.id=:d AND n.calificacion${condicion}`,{t:trimestre,cl:cl,m:materia,d:docente})
            .getCount()
    }

    //Devuelve para el alumno cantidad de materias aprobadas y desaprobadas

    getCantidadMateriasAprobadasODesaprobadas(cl:number,trimestre:number,alumno:number,condicion:string){
        return this.createQueryBuilder("n")
            .leftJoinAndSelect("n.alumno","alumno")
            .where(`n.cicloLectivo=:cl AND n.calificacion${condicion} AND trimestre=:tri AND alumno.id=:al`,{cl:cl,tri:trimestre,al:alumno})
            .getCount();
    }

    getNotasAlumnosCursoGraficoBarras(curso:number,cl:number,trimestre:number){
        return this.createQueryBuilder("n")
            .innerJoin("n.curso","curso")
            .innerJoin("n.materia","materia")
            .select(["materia.nombre","n.condicionMateria","n.trimestre","curso.id"])
            .where("curso.id=:c AND n.trimestre=:t AND n.cicloLectivo=:cl",{c:curso,t:trimestre,cl:cl})
            .getMany();

    }
}