import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Docente } from "./Docente";
import { MesaExamen } from "./MesaExamen";

@Entity()
export class DocenteMesaExamen{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    docenteId:number;

    @Column()
    mesaExamenId:number;

    @ManyToOne(()=>Docente,docente=>docente.mesasExamen)
    docente:Docente;

    @ManyToOne(()=>MesaExamen,mesaExamen=>mesaExamen.docentesMesa)
    mesaExamen:MesaExamen;

    @Column()
    isPresidente:boolean;

    @Column({length:100})
    descargo:string;

}