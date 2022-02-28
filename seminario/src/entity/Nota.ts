import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Materia } from "./Materia";

@Entity()
export class Nota{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    trimestre:number;

    @Column()
    cicloLetivo:number;

    @Column()
    fecha:number;

    @Column()
    calificacion:number;

    @ManyToOne(()=>Materia,materia=>materia.notas)
    @JoinColumn()
    materia:Materia;

}