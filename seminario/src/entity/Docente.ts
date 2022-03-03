import { Entity, OneToMany } from "typeorm";
import { DocenteMateria } from "./DocenteMateria";
import { Persona } from "./Persona";

@Entity()
export class Docente extends Persona{


    @OneToMany(()=>DocenteMateria,docenteMateria=>docenteMateria.docente)
    materias:DocenteMateria [];

}