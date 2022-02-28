import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Materia } from "./Materia";

@Entity()
export class AlumnoMateria{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    alumnoId:number;

    @Column()
    materiaId:number;

    @Column()
    cicloLectivo:number;

    @Column()
    condicionMateria:string;

    @ManyToOne(()=>Alumno,alumno=>alumno.alumnoMaterias)
    alumno:Alumno;

    @ManyToOne(()=>Materia,materia=>materia.materiaAlumnos)
    materia:Materia;
}