import { Request,Response } from "express";
import { getCustomRepository, getRepository, Transaction } from "typeorm";
import { Nota, TipoNota } from "../entity/Nota";
import { AlumnoRepository } from "../repository/AlumnoRepository";
import { MateriaRepository } from "../repository/MateriaRepository";


export const getAlumnosPorMateria=
async (req:Request,res:Response)=>{
    const {docente,materia,cl}=req.params;
        const alumnos=await getCustomRepository(AlumnoRepository)
        .findAlumnosPorCadaMateria(parseInt(docente),parseInt(materia),parseInt(cl));
    return res.json(alumnos);
}



export const getMateriasAndCurso=async(req:Request,res:Response)=>{
    const {id,cl,tipo}=req.params;
    const matRep= getCustomRepository(MateriaRepository);
    const materias=await matRep.findMateriasConCurso(parseInt(id),parseInt(cl),tipo);
    //materias.forEach(m=>console.log(m.nombre+" "+m.curso.nivel+m.curso.cursos[0].division+m.curso.ciclo+m.curso.cursos[0].turno));
    return res.json(materias);
}

export const cargarNotasAlumnos=async(req:Request,res:Response)=>{
    // En el body envio el id de materia y alumno, no hizo
    //falta buscar los objetos para establecer la relacion

    const calif=await getRepository(Nota).save(req.body);
     return res.json(calif);
}

