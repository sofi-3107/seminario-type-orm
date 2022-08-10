import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";



export enum EstadoAsistencia{
    AUSENTE="ausente",
    PRESENTE="presente",
    TARDE="tarde"
}

@Entity()
export class Asistencia{

    @PrimaryGeneratedColumn()
    id:number;


    @Column({length:10})
    fecha:string;


    @Column({
        type:"enum"
        ,enum:EstadoAsistencia,
        default:EstadoAsistencia.AUSENTE})
    estado:EstadoAsistencia;

    @Column("int")
    cicloLectivo:number;

    @ManyToOne(()=>Alumno,alumno=>alumno.asistencias)
    @JoinColumn()
    alumno:Alumno;


 


    
}


