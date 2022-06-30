
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "./Curso";
import { Docente } from "./Docente";
import { Encuesta } from "./Encuesta";
import { Materia } from "./Materia";





@Entity()
export class DocenteMateria {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    docenteId:number;

    @Column()
    materiaId:number;

    @Column("int")
    cicloLectivo:number;

    @ManyToOne(()=>Docente,docente=>docente.materias)
    docente:Docente;

    @ManyToOne(()=>Materia,materia=>materia.docentes)
    materia:Materia;

    @ManyToOne(()=>Curso,curso=>curso.docenteMaterias)
    curso:Curso;

    @OneToMany(()=>Encuesta,encuesta=>encuesta.docenteMateria)
    encuestas:Encuesta[];



}