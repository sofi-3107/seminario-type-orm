import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AlumnoMateria } from "./AlumnoMateria";
import { Curso } from "./Curso";
import { Docente } from "./Docente";
import { DocenteMateria } from "./DocenteMateria";
import { MesaExamen } from "./MesaExamen";
import { Nota } from "./Nota";


@Entity()
export class Materia{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:60})
    nombre:string;

    @OneToMany(()=>Nota,nota=>nota.materia)
    notas:Nota[];

    @OneToMany(()=>AlumnoMateria,alumnoMateria=>alumnoMateria.materia)
    materiaAlumnos:AlumnoMateria[];

    @OneToMany(()=>DocenteMateria,docenteMateria=>docenteMateria.materia)
    docentes:DocenteMateria[];

    @ManyToMany(()=>Curso,curso=>curso.planDeEstudios)
    cursos:Curso[];

    @OneToMany(()=>MesaExamen, mesaExamen=>mesaExamen.materia)
    mesasExamen:MesaExamen;
}