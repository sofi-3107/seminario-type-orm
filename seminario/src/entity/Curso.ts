import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsInt, Length} from "class-validator";
import { Alumno } from "./Alumno";
import { Preceptor } from "./Preceptor";
import { Materia } from "./Materia";

@Entity()
export class Curso {

    @PrimaryGeneratedColumn()
    id:number;

    @Column("int")
    @IsInt()
    nivel:number;

    @Column()
    @Length(6,10)
    ciclo:string;

    @Column("int")
    division:number;

    @Column()
    @Length(6,10)
    turno:string

    @Column("int")
    cicloLectivo:number;

    @ManyToOne(()=>Preceptor,preceptor=>preceptor.cursosACargo)
    preceptor:Preceptor;

    @ManyToMany(()=>Alumno,alumno=>alumno.cursoInscripciones)
    alumnos:Alumno[]

    @ManyToMany(()=>Materia,materia=>materia.cursos)
    planDeEstudios:Materia[];

}