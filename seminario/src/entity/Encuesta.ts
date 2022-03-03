import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Pregunta } from "./Pregunta";


@Entity()
export class Encuesta{

    @PrimaryGeneratedColumn()
    id:number;

    @OneToMany(()=>Pregunta,pregunta=>pregunta.encuesta)
    @JoinTable({name:"encuesta_pregunta"})
    preguntas:Pregunta[];

    @Column("int")
    cicloLectivo:number;

    @Column("int")
    trimestre:number;

    

    

}