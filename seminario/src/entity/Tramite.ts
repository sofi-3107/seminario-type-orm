import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";

export enum TipoTramite{
    TITULO='titulo',
    PASE='pase'
}

export enum FaseTramite{
    SIN_ACTIVIDAD='sin actividad',
    INICIADO='iniciado',
    ENVIADO='enviado',
    PROCESO='en proceso',
    FINALIZADO='finalizado'
}


@Entity()
export class Tramite{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:10})
    fecha:string;

    @Column({
        type:'enum',
        enum:TipoTramite,
        default:TipoTramite.PASE
    })
    tipo:TipoTramite;

    @Column({
        type:'enum',
        enum:FaseTramite,
        default:FaseTramite.SIN_ACTIVIDAD
    })
    fase:FaseTramite;

    @ManyToOne(()=>Alumno,alumno=>alumno.tramites)
    alumno:Alumno;

}