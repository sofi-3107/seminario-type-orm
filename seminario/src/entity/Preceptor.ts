import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { Curso } from "./Curso";
import { Persona } from "./Persona";


@Entity()
export class Preceptor extends Persona{

   
    @OneToMany(()=>Curso,curso=>curso.preceptor)
    cursosACargo:Curso[];

}