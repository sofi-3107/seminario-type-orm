import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Docente } from "./Docente";
import { DocenteMateria } from "./DocenteMateria";
import { Materia } from "./Materia";
import { Pregunta } from "./Pregunta";


@Entity()
export class Encuesta{

    @PrimaryGeneratedColumn()
    id:number;

   @ManyToOne(()=>Pregunta,pregunta=>pregunta.encuestas)
    @JoinColumn({name:"id_pregunta"})
    pregunta:Pregunta;

    @Column("int")
    cicloLectivo:number;

    @Column("int")
    trimestre:number;

    @Column("int")
    cantidad:number;

    @ManyToOne(()=>DocenteMateria,docenteMateria=>docenteMateria.encuestas)
    docenteMateria:DocenteMateria;

    


    

}