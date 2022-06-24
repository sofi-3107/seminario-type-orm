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

    getCantidadAlumnosAprobados(cl:number,docente:number,materia:number,trimestre:number,condicion:boolean){
        var cdn=()=>{if(condicion){return ">=6"}else{return "<=6"}}        
        return this.createQueryBuilder("n")
            .innerJoinAndSelect("n.alumno","alumno")
            .innerJoinAndSelect("alumno.cursos","alumnoCurso")
            .innerJoinAndSelect("alumnoCurso.curso","curso")
            .innerJoinAndSelect("curso.nivel","cursoNivel")
            .innerJoinAndSelect("cursoNivel.materias","planEstudio")
            .innerJoinAndSelect("planEstudio.docentes","docenteMateria","docenteMateria.materia=:m",{m:materia})
            .innerJoinAndSelect("docenteMateria.docente","docente")
           // .where("n.calificacion "+cdn+"AND n.trimestre=:t"+"AND docente.id=:id",{t:trimestre,id:docente})
           .where("n.calificacion <=6 AND n.trimestre=:t AND docente.id=:id",{t:trimestre,id:docente})
            .getMany()


    }
}