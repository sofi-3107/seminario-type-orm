import { Request,Response } from "express";
import { resolve } from "path";
import { getCustomRepository } from "typeorm";
import { AsistenciaRepository } from "../repository/AsistenciaRepository";
import { MateriaRepository } from "../repository/MateriaRepository";
import { MesaExamenRepository } from "../repository/MesaExamenRepository";
import { NotasRepository } from "../repository/NotasRepository";

//Consulta de libreta, con notas trimestrales

export const getLibreta=async(req:Request,res:Response)=>{
const {alumno,anio,tipo}=req.params;
const libreta= await getCustomRepository(NotasRepository)
        .findNotasAlumno(parseInt(alumno),parseInt(anio),tipo);
return res.json(libreta);
}

//Consulta de materias pendientes

export const getMateriasPendientes=async(req:Request,res:Response)=>{
    const {alumno,cl}=req.params;
    const materias= await getCustomRepository(MateriaRepository)
                        .getMateriasPendientesAlumno(parseInt(alumno),parseInt(cl));
    return res.json(materias);
}


export const getMesasDisponibles=async(req:Request,res:Response)=>{
    const {alumno,cl,condicion,tipo}=req.params;
    const mesas= await getCustomRepository(MesaExamenRepository)
                        .findMesasExamenDisponiblesAlumno(parseInt(alumno),condicion,parseInt(cl),tipo);
    return res.json(mesas);
}

export const getDatosAsistenciaInasistencias= async(req:Request,res:Response)=>{
    const {alumno,cl}=req.params;
    const resultado= await getCustomRepository(AsistenciaRepository)
                            .getCantAsistenciasInasistencias(parseInt(alumno),parseInt(cl));
    return res.json(resultado);
}

export const getCantMateriasAprobadasyDesaprobadas= async(req:Request,res:Response)=>{
    const {alumno,cl}=req.params;
    const resultado= await getCustomRepository(NotasRepository)
        .getCantidadMateriasAprobadasYDesaprobadas(parseInt(alumno),parseInt(cl));
    return res.json(resultado);
}