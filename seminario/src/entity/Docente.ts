import { Column, Entity, OneToMany } from "typeorm";
import { DocenteMateria } from "./DocenteMateria";
import { DocenteMesaExamen } from "./DocenteMesaExamen";
import { Persona } from "./Persona";

@Entity()
export class Docente extends Persona{


    @OneToMany(()=>DocenteMateria,docenteMateria=>docenteMateria.docente)
    materias:DocenteMateria [];

    @OneToMany(()=>DocenteMesaExamen,docenteMesaExamen=>docenteMesaExamen.docente)
    mesasExamen:DocenteMesaExamen[];


}