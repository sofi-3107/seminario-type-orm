import { Column, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail} from "class-validator";

export abstract class Persona{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:25})
    apellido:string;

    @Column({length:25})
    nombre:string;

    @Column({length:8})
    dni:string;

    @Column({length:15})
    telefono:string;

    @Column({length:20})
    @IsEmail()
    email:string;
    

}