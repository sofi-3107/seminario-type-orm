import { Column, Entity, OneToMany } from "typeorm";
import { DocenteMateria } from "./DocenteMateria";
import { DocenteMesaExamen } from "./DocenteMesaExamen";
import { Encuesta } from "./Encuesta";
import { Nota } from "./Nota";
import { Persona } from "./Persona";

@Entity()
export class Docente extends Persona{


    @OneToMany(()=>DocenteMateria,docenteMateria=>docenteMateria.docente)
    materias:DocenteMateria [];

    @OneToMany(()=>DocenteMesaExamen,docenteMesaExamen=>docenteMesaExamen.docente)
    mesasExamen:DocenteMesaExamen[];

    @OneToMany(()=>Nota,nota=>nota.docente)
    notas:Nota[];

    @OneToMany(()=>Encuesta,encuesta=>encuesta.docente)
    encuestas:Encuesta[];

}