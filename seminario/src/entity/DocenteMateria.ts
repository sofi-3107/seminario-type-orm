
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Docente } from "./Docente";
import { Encuesta } from "./Encuesta";
import { Materia } from "./Materia";

export enum TipoMateria{
    MESA_EXAMEN_REGULAR="examen_regular",
    MESA_EXAMEN_PENDIENTES="examen_pendientes",
    NORMAL="normal"
}



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

    @Column(
       {type:"enum",
        enum:TipoMateria,
        default:TipoMateria.NORMAL
    })
    tipo:TipoMateria;


    @ManyToOne(()=>Docente,docente=>docente.materias)
    docente:Docente;

    @ManyToOne(()=>Materia,materia=>materia.docentes)
    materia:Materia;

    @ManyToMany(()=>Encuesta,encuesta=>encuesta.docenteMateria)
    @JoinTable({name:"docente_materia_encuesta"})
    encuestas:Encuesta[];

    @Column()
    isPresidente:boolean;

}