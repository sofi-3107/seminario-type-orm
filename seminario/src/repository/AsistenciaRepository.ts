import { EntityRepository, Repository } from "typeorm";
import { Asistencia } from "../entity/Asistencia";

@EntityRepository(Asistencia)
export class AsistenciaRepository extends Repository<Asistencia>{

    

}