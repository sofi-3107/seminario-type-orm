import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "./Curso";
import { Materia } from "./Materia";

@Entity()
export class CursoNivel {

    @PrimaryGeneratedColumn()
    id:number;

    @Column("int")
    nivel:number;

    @Column({length:10})
    ciclo:string;

    @OneToMany(()=>Materia,materia=>materia.curso)
    materias:Materia[]

    @OneToMany(()=>Curso,curso=>curso.nivel)
    cursos:Curso[]

}