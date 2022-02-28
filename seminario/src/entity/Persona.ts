import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class Persona{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    apellido:string;

    @Column()
    nombre:string;

    @Column()
    dni:string;

    @Column()
    telefono:string;
    

}