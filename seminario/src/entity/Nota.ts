import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Docente } from "./Docente";
import { Materia } from "./Materia";


export enum TipoNota{
    NORMAL="normal",
    EXAMEN_REGULAR="examen regular",
    EXAMEN_PENDIENTE="examen pendiente"
}

export enum CondicionMateria{
    APROBADO="aprobado",
    APROBADO_MESA="aprobado en mesa de examen",
    PENDIENTE="pendiente",
    DESAPROBADO="desaprobado"
}

@Entity()
export class Nota{

    @PrimaryGeneratedColumn()
    id:number;

    @Column("int")
    trimestre:number;

    @Column("int")
    cicloLectivo:number;

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

    @ManyToOne(()=>Alumno,alumno=>alumno.notas)
    alumno:Alumno;

    @Column({
        type:"enum",
        enum:CondicionMateria,
        default:CondicionMateria.DESAPROBADO
    })
    condicionMateria:CondicionMateria;

    @ManyToOne(()=>Docente,docente=>docente.notas)
    docente:Docente;

}