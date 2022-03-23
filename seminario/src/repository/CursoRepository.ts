import { EntityRepository, Repository } from "typeorm";
import { Curso } from "../entity/Curso";

@EntityRepository(Curso)
export class CursoRepository extends Repository<Curso>{


    // Devuelve los cursos a cargo de cada preceptor por su id
    getCursosByPreceptor(preceptor:number){
        return this.createQueryBuilder("c")
                    .innerJoinAndSelect("c.preceptor","preceptor","preceptor.id=:preceptor",{preceptor:preceptor})
                    .innerJoinAndSelect("c.nivel","nivel")
                    .select(["c.division","c.turno","c.nivel","nivel.nivel","nivel.ciclo"])
                    .getMany()
    }

}