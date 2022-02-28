import { Entity, OneToMany } from "typeorm";
import { AlumnoMateria } from "./AlumnoMateria";
import { Persona } from "./Persona";

@Entity()
export class Alumno extends Persona{

    @OneToMany(()=>AlumnoMateria,alumnoMateria=>alumnoMateria.alumno)
    alumnoMaterias:AlumnoMateria[];
    
}