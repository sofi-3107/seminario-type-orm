import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsInt, Length} from "class-validator";
import { AlumnoCurso } from "./AlumnoCurso";
import { Preceptor } from "./Preceptor";
import { Materia } from "./Materia";
import { CursoNivel } from "./CursoNivel";
import { DocenteMateria } from "./DocenteMateria";
import { Nota } from "./Nota";

@Entity()
export class Curso {

    @PrimaryGeneratedColumn()
    id:number;

    @Column("int")
    division:number;

    @Column({length:10})
    @Length(6,10)
    turno:string

    @ManyToOne(()=>Preceptor,preceptor=>preceptor.cursosACargo)
    preceptor:Preceptor;

    @ManyToMany(()=>AlumnoCurso,alumnoCurso=>alumnoCurso.curso)
    alumnos:AlumnoCurso[]

    @ManyToOne(()=>CursoNivel,cursoNivel=>cursoNivel.cursos)
    @JoinColumn({name:"curso_nivel"})
    nivel:CursoNivel;

    @OneToMany(()=>DocenteMateria,docenteMateria=>docenteMateria.curso)
    docenteMaterias:DocenteMateria[];

    @OneToMany(()=>Nota,nota=>nota.curso)
    notas:Nota[];

}