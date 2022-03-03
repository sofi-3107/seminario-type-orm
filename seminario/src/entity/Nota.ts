import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Materia } from "./Materia";


export enum TipoNota{
    NORMAL="normal",
    EXAMEN_REGULAR="examen regular",
    EXAMEN_PENDIENTE="examen pendiente"
}


@Entity()
export class Nota{

    @PrimaryGeneratedColumn()
    id:number;

    @Column("int")
    trimestre:number;

    @Column("int")
    cicloLetivo:number;

    @Column({length:10})
    fecha:string;

    @Column("double")
    calificacion:number;

    @ManyToOne(()=>Materia,materia=>materia.notas)
    @JoinColumn()
    materia:Materia;

    @Column({
        type:"enum",
        enum:TipoNota,
        default:TipoNota.NORMAL
    })
    tipo:TipoNota;

}