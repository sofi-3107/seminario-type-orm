import { Request,Response } from "express";
import { RequestOptions } from "https";
import { cursorTo } from "readline";
import { getCustomRepository, getRepository, Transaction } from "typeorm";
import { Alumno } from "../entity/Alumno";
import { Materia } from "../entity/Materia";
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
    const {cicloLectivo,al,trimestre,calificacion,fecha,tipo}=req.body;
    
    const alumno= await getCustomRepository(AlumnoRepository).findAlumnoByNotasMaterias(al,cicloLectivo,trimestre);
    const materia=await getCustomRepository(MateriaRepository).findOne(req.body.materia.id);
    const nota=new Nota();
    nota.alumno=alumno!;
    nota.materia=materia!;
    nota.calificacion=calificacion,
    nota.trimestre=trimestre;
    nota.fecha=fecha;
    nota.tipo=TipoNota.NORMAL;
    getRepository(Nota).save(nota);
        return nota;
}


export const getAllAlumnos=async(req:Request,res:Response)=>{
    const alumnos=await getRepository(Alumno).find();
    res.json(alumnos);
    
}