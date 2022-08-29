import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Materia } from "./Materia";


@Entity()
export class AlumnoMaterias{


 @PrimaryGeneratedColumn()
    id:number;

@Column({length:20})
    situacion:String;

@ManyToOne(()=>Alumno,alumno=>alumno.situacionMaterias)
alumno:Alumno;

@ManyToOne(()=>Materia, materia=>materia.situacionAlumnoMaterias)
materia:Materia;
}
