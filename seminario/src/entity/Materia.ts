import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AlumnoMateria } from "./AlumnoMateria";
import { Nota } from "./Nota";


@Entity()
export class Materia{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:60})
    nombre:string;

    @OneToMany(()=>Nota,nota=>nota.materia)
    notas:Nota[];

    @OneToMany(()=>AlumnoMateria,alumnoMateria=>alumnoMateria.materia)
    materiaAlumnos:AlumnoMateria[];
}