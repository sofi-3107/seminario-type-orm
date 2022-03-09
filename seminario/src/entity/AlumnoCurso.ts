import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

@Entity()
export class AlumnoCurso{

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column("int")
    cicloLectivo:number;

    @Column()
    alumnoId:number;

    //Debe respetar el formato entityId
    @Column()
    cursoId:number;

    @ManyToOne(()=>Alumno,alumno=>alumno.cursos)
    alumno:Alumno;

    @ManyToOne(()=>Curso,curso=>curso.alumnos)
    curso:Curso;
}