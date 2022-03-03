import { Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { AlumnoMateria } from "./AlumnoMateria";
import { Asistencia } from "./Asistencia";
import { Curso } from "./Curso";
import { Persona } from "./Persona";

@Entity()
export class Alumno extends Persona{

    @OneToMany(()=>AlumnoMateria,alumnoMateria=>alumnoMateria.alumno)
    alumnoMaterias:AlumnoMateria[];

    @ManyToMany(()=>Asistencia)
    @JoinTable()
    asistencias:Asistencia[]

    @ManyToMany(()=>Curso,curso=>curso.alumnos)
    @JoinTable({name:"alumno_asistencia"})
    cursoInscripciones:Curso[]
    
}