import internal from "stream";
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

    //Grafico de barras del preceptor, devuelve todas las materias aprobados o desaprobados, cantidad
    getCantidadAprobadosDesaprobadosPorMateria(curso:number,cl:number,trimestre:number,condicion:string){
        return this.query(
            `SELECT COUNT(n.condicionMateria) AS ${condicion}s, m.nombre AS materia FROM nota As n
                JOIN materia AS m ON n.materiaId=m.id
                JOIN curso As c ON n.cursoId=c.id
            WHERE n.cicloLectivo=${cl} AND n.trimestre=${trimestre} AND n.condicionMateria='${condicion}' AND n.cursoId=${curso}
            GROUP BY m.nombre;`
        );
    }
    //Grafico de materia del profesor

    getCantidadAprobadosDesaprobadosUnaMateria(condicion:string, materia:number, docente:number, cl:number, trimestre:number){
        return this.query(`SELECT COUNT(*) AS cantidad, n.condicionMateria AS condicion FROM nota As n
        JOIN materia AS m ON n.materiaId=m.id
        JOIN docente AS d ON n.docenteId=d.id
        WHERE d.id=${docente} AND m.id=${materia} AND n.condicionMateria='${condicion}' AND n.cicloLectivo=${cl} AND n.trimestre=${trimestre} GROUP BY n.condicionMateria`);
    }




   
}