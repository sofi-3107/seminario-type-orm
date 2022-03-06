import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Encuesta } from "./Encuesta";

@Entity()
export class Pregunta{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    consigna:string;

  @OneToMany(()=>Encuesta,encuesta=>encuesta.pregunta)
    encuestas:Encuesta[];

    

    
  
   
    

}