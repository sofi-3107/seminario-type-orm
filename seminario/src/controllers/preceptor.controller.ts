import { Request,Response } from "express";
import { resolve } from "path";
import { json } from "stream/consumers";
import { getCustomRepository, getRepository } from "typeorm";
import { Asistencia } from "../entity/Asistencia";
import { AlumnoRepository } from "../repository/AlumnoRepository";
import { AsistenciaRepository } from "../repository/AsistenciaRepository";
import { CursoRepository } from "../repository/CursoRepository";
import { NotasRepository } from "../repository/NotasRepository";


//Cursos del preceptpr
export const getCursosByPreceptor=async(req:Request,res:Response)=>{
    const cursos= await getCustomRepository(CursoRepository)
                    .getCursosByPreceptor(parseInt(req.params.id));
    return res.json(cursos);

}
//Trae la lista de alumnos de un curso para tomar asistencia o para mandar sms
export const getAlumnosPorCurso=async(req:Request,res:Response)=>{

    const {curso,cl,fecha}=req.params;
    const alumnos=await getCustomRepository(AlumnoRepository)
                    .findAlumnosPorCursoAsistencia(parseInt(curso),parseInt(cl),fecha);
    return res.json(alumnos);

}

export const tomarAsistencia=async(req:Request,res:Response)=>{
   
    const asistencia= await getRepository(Asistencia).save(req.body);
    return res.json(asistencia);
}

export const comprobarAsistencia= async (req:Request,res:Response)=>{
    const {id,fecha}=req.params;
    const asistencia=await getRepository(Asistencia).findOne({
        where:[{id:id},{fecha:fecha}],
    });

    if(asistencia!=null){
        return res.json(asistencia);
    }
    else{
        return res.json('ausente');
    }
}   


export const getInasistenciasAlumnosCurso=async(req:Request,res:Response)=>{
        const {curso,cl}=req.params;
    const alumnos= await getCustomRepository(AsistenciaRepository)
                        .getRawCantidadInasistenciasCurso(parseInt(curso),parseInt(cl));
    return res.json(alumnos);
}


export const getNotasAlumnoCursoTodasMaterias=async(req:Request,res:Response)=>{
    const {curso,cl,trimestre,condicion}=req.params;
    const notasAlumnosCurso = await getCustomRepository(NotasRepository)
    .getCantidadAprobadosDesaprobadosPorMateria(parseInt(curso),parseInt(cl),parseInt(trimestre),condicion);
return res.json(notasAlumnosCurso);
}