import { Request,Response } from "express";
import { getCustomRepository } from "typeorm";
import { MateriaRepository } from "../repository/MateriaRepository";

export const getAlumnosPorMateria=
async (req:Request,res:Response)=>{
    const alumnos=await getCustomRepository(MateriaRepository).findMateriasPropiasConAlumnos(1);
    return res.json(alumnos);
}

export const cargarNotasAlumnos=async(req:Request,res:Response)=>{

}