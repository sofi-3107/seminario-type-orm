import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AlumnoMateria } from "./AlumnoMateria";
import { Curso } from "./Curso";
import { CursoNivel } from "./CursoNivel";
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

    @ManyToOne(()=>CursoNivel,cursoNivel=>cursoNivel.materias)
    @JoinColumn({name:"curso_nivel"})
    curso:CursoNivel;

    @OneToMany(()=>MesaExamen, mesaExamen=>mesaExamen.materia)
    mesasExamen:MesaExamen;
}