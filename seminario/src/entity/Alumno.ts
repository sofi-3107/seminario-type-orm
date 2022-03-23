import { Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Asistencia } from "./Asistencia";
import { MesaExamen } from "./MesaExamen";
import { Nota } from "./Nota";
import { Persona } from "./Persona";
import { AlumnoCurso } from "./AlumnoCurso";
import { Tutor } from "./Tutor";

@Entity()
export class Alumno extends Persona{

    @OneToMany(()=>Asistencia,asistencia=>asistencia.alumno)
    asistencias:Asistencia[]

    @OneToMany(()=>AlumnoCurso,alumnoCurso=>alumnoCurso.alumno)
    cursos:AlumnoCurso[]

    @ManyToMany(()=>MesaExamen,mesaExamen=>mesaExamen.inscriptos)
    mesasExamen:MesaExamen[];

    @OneToMany(()=>Nota,nota=>nota.alumno)
    notas:Nota[];

    @ManyToOne(()=>Tutor,tutor=>tutor.alumnos)
    tutor:Tutor;
    
}