import { Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { AlumnoMateria } from "./AlumnoMateria";
import { Asistencia } from "./Asistencia";
import { MesaExamen } from "./MesaExamen";
import { Nota } from "./Nota";
import { Persona } from "./Persona";
import { AlumnoCurso } from "./AlumnoCurso";

@Entity()
export class Alumno extends Persona{

    @OneToMany(()=>AlumnoMateria,alumnoMateria=>alumnoMateria.alumno)
    alumnoMaterias:AlumnoMateria[];

    @OneToMany(()=>Asistencia,asistencia=>asistencia.alumno)
    asistencias:Asistencia[]

    @OneToMany(()=>AlumnoCurso,alumnoCurso=>alumnoCurso.alumno)
    cursos:AlumnoCurso[]

    @ManyToMany(()=>MesaExamen,mesaExamen=>mesaExamen.inscriptos)
    mesasExamen:MesaExamen[];

    @OneToMany(()=>Nota,nota=>nota.alumno)
    notas:Nota[];
    
}