import { EntityRepository, Repository } from "typeorm";
import { Alumno } from "../entity/Alumno";

@EntityRepository(Alumno)
export class AlumnoRepository extends Repository<Alumno>{
    
    findByNombre(nombre:string){
        return this.findOne({nombre});
    }
}