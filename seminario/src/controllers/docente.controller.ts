import { Request,Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { Nota } from "../entity/Nota";
import { MateriaRepository } from "../repository/MateriaRepository";

export const getMateriasConAlumnos=
async (req:Request,res:Response)=>{
    const alumnos=await getCustomRepository(MateriaRepository)
        .findMateriasPropiasConAlumnos(parseInt(req.params.idDocente),parseInt(req.params.idMateria));
    return res.json(alumnos);
}

export const cargarNotasAlumnos=async(req:Request,res:Response)=>{
    const nota=await getRepository(Nota).save(req.body);
        return nota;
}