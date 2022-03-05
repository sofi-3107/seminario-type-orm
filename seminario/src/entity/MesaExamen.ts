import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Materia } from "./Materia";
import { TipoNota } from "./Nota";






@Entity()
export class MesaExamen {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:10})
    fecha:string;

    @Column({length:10})
    horaInicio:string;

    @Column({length:10})
    horaFin:string;

    @Column({
        type:"enum",
        enum:TipoNota,
        default:TipoNota.EXAMEN_REGULAR
    })
    condicionExamen:TipoNota;

    @ManyToMany(()=>Alumno,alumno=>alumno.mesasExamen)
    @JoinTable({name:"alumno_mesa_examen"})
    inscriptos:Alumno[];

    @ManyToOne(()=>Materia,materia=>materia.mesasExamen)
    materia:Materia;

}