import { Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { AlumnoMateria } from "./AlumnoMateria";
import { Asistencia } from "./Asistencia";
import { Curso } from "./Curso";
import { MesaExamen } from "./MesaExamen";
import { Nota } from "./Nota";
import { Persona } from "./Persona";

@Entity()
export class Alumno extends Persona{

    @OneToMany(()=>AlumnoMateria,alumnoMateria=>alumnoMateria.alumno)
    alumnoMaterias:AlumnoMateria[];

    @OneToMany(()=>Asistencia,asistencia=>asistencia.alumno)
    asistencias:Asistencia[]

    @ManyToMany(()=>Curso,curso=>curso.alumnos)
    @JoinTable({name:"alumno_curso"})
    cursoInscripciones:Curso[]

    @ManyToMany(()=>MesaExamen,mesaExamen=>mesaExamen.inscriptos)
    mesasExamen:MesaExamen[];

    @OneToMany(()=>Nota,nota=>nota.alumno)
    notas:Nota[];
    
}