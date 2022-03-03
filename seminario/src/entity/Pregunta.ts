import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Encuesta } from "./Encuesta";

@Entity()
export class Pregunta{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    consigna:string;

    @ManyToOne(()=>Encuesta,encuesta=>encuesta.preguntas)
    encuesta:Encuesta;

    @Column("int")
    cantidad:number;

    
  
   
    

}