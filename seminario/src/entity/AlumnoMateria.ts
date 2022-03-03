import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Materia } from "./Materia";


export enum CondicionMateria{
    APROBADA="aprobada",
    PENDIENTE="pendiente",
    REGULAR="regular",
    LIBRE="libre",
    INICIAL="inicial"
}


@Entity()
export class AlumnoMateria{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    alumnoId:number;

    @Column()
    materiaId:number;

    @Column("int")
    cicloLectivo:number;

    @Column()
    condicionMateria:string;

    @ManyToOne(()=>Alumno,alumno=>alumno.alumnoMaterias)
    alumno:Alumno;

    @ManyToOne(()=>Materia,materia=>materia.materiaAlumnos)
    materia:Materia;

    @Column({type:"enum",
        enum:CondicionMateria,
        default:CondicionMateria.INICIAL})
    condicion:CondicionMateria;
}

