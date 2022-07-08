import { EntityRepository, QueryBuilder, Repository } from "typeorm";
import { CursoNivel } from "../entity/CursoNivel";

@EntityRepository(CursoNivel)
export class CursoNivelRepository extends Repository<CursoNivel>{

    getNotasCursoTodasMaterias(cl:number,curso:number,trimestre:number) {
        return this.createQueryBuilder("niv")
                .innerJoin("niv.materias","materia")
                .innerJoin("materia.docentes","docenteMateria")
                .innerJoin("docenteMateria.curso","curso")
                .innerJoin("materia.notas","nota")
                .select(["curso.id","materia.id","nota.calificacion","nota.trimestre","nota.cicloLectivo"])
                .where("curso.id=:c AND nota.trimestre=:tr AND nota.cicloLectivo=:cl",{c:curso,tr:trimestre,cl:cl})
                //.groupBy("materia.nombre")
                .getMany();
        
    }
}