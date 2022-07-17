import { EntityRepository, Repository } from "typeorm";
import { Encuesta } from "../entity/Encuesta";

@EntityRepository(Encuesta)
export class EncuestaRepository extends Repository<Encuesta>{
    


    getDatosEncuestaDocenteMateria( cl:number, trimestre:number, docente:number, materia:number){

        return this.query(`SELECT COUNT(e.id_pregunta) AS cantidad, p.consigna FROM encuesta AS e
        JOIN pregunta AS p ON e.id_pregunta=p.id
        JOIN docente AS d ON e.id_docente=d.id
        JOIN materia As m ON e.id_materia=m.id
        WHERE m.id=${materia} AND d.id=${docente} AND e.trimestre=${trimestre} AND e.cicloLectivo=${cl}
        GROUP By p.consigna;`);
    }



}