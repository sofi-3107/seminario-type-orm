
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToMany(()=>Encuesta,encuesta=>encuesta.docenteMateria)
    @JoinTable({name:"docente_materia_encuesta"})
    encuestas:Encuesta[];



}