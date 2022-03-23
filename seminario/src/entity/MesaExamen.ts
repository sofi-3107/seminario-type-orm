import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { DocenteMesaExamen } from "./DocenteMesaExamen";
import { Materia } from "./Materia";
import { TipoNota } from "./Nota";

export enum TipoMesa{
    MESA_EXAMEN_REGULAR="examen regular",
    MESA_EXAMEN_PENDIENTES="examen pendientes",
  
}




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

    @ManyToMany(()=>Alumno,alumno=>alumno.mesasExamen)
    @JoinTable({name:"alumno_mesa_examen"})
    inscriptos:Alumno[];

    @ManyToOne(()=>Materia,materia=>materia.mesasExamen)
    materia:Materia;

    @Column(
        {type:"enum",
         enum:TipoMesa,
         default:TipoMesa.MESA_EXAMEN_REGULAR
     })
     tipo:TipoMesa;

     @OneToMany(()=>DocenteMesaExamen,docenteMesaExamen=>docenteMesaExamen.mesaExamen)
     docentesMesa:DocenteMesaExamen[];

     @Column("int")
     anio:number;
}