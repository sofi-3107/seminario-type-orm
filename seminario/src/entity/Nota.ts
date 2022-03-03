import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Materia } from "./Materia";

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

}