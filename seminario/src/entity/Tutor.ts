import { Column, Entity, OneToMany } from "typeorm";
import { Alumno } from "./Alumno";
import { Persona } from "./Persona";


@Entity()
export class Tutor extends Persona{

    

    @OneToMany(()=>Alumno,alumno=>alumno.tutor)
    alumnos:Alumno;
}