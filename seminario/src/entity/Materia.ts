import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CursoNivel } from "./CursoNivel";
import { DocenteMateria } from "./DocenteMateria";
import { MesaExamen } from "./MesaExamen";
import { Nota } from "./Nota";


@Entity()
export class Materia{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:60})
    nombre:string;

    @OneToMany(()=>Nota,nota=>nota.materia)
    notas:Nota[];


    @OneToMany(()=>DocenteMateria,docenteMateria=>docenteMateria.materia)
    docentes:DocenteMateria[];

    @ManyToOne(()=>CursoNivel,cursoNivel=>cursoNivel.materias)
    @JoinColumn({name:"curso_nivel"})
    curso:CursoNivel;

    @OneToMany(()=>MesaExamen, mesaExamen=>mesaExamen.materia)
    mesasExamen:MesaExamen;
}