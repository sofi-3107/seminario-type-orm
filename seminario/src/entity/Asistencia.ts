import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";



export enum EstadoAsistencia{
    AUSENTE="ausente",
    PRESENTE="presente"
}

@Entity()
export class Asistencia{

    @PrimaryGeneratedColumn()
    id:number;


    @Column({length:10})
    fecha:string;

    @Column("int")
    tardanza:number;


    @Column({type:"enum"
    ,enum:EstadoAsistencia,
    default:EstadoAsistencia.AUSENTE})
    estado:EstadoAsistencia;

    @Column("int")
    cicloLectivo:number;


 


    
}


