import { Request,Response } from "express";
import { getCustomRepository, getRepository, Transaction } from "typeorm";
import { Nota, TipoNota } from "../entity/Nota";
import { AlumnoRepository } from "../repository/AlumnoRepository";
import { EncuestaRepository } from "../repository/EncuestaRepository";
import { MateriaRepository } from "../repository/MateriaRepository";
import { MesaExamenRepository } from "../repository/MesaExamenRepository";
import { NotasRepository } from "../repository/NotasRepository";


/**NOTAS TRIMESTRALES */
export const getAlumnosPorMateria=
async (req:Request,res:Response)=>{
    const {docente,materia,cl}=req.params;
        const alumnos=await getCustomRepository(AlumnoRepository)
        .findAlumnosPorCadaMateria(parseInt(docente),parseInt(materia),parseInt(cl));
    return res.json(alumnos);
}


export const getMateriasAndCurso=async(req:Request,res:Response)=>{
    const {id,cl}=req.params;
    const matRep= getCustomRepository(MateriaRepository);
    const materias=await matRep.findMateriasPropias(parseInt(id),parseInt(cl));
    //materias.forEach(m=>console.log(m.nombre+" "+m.curso.nivel+m.curso.cursos[0].division+m.curso.ciclo+m.curso.cursos[0].turno));
    return res.json(materias);
}

export const getNotas=async(req:Request,res:Response)=>{
    const {anio,materia,alumno,tipo,trimestre}=req.params;
    console.log(req.params);
    const notasRep= getCustomRepository(NotasRepository);
    const notas=await notasRep.findNotasAlumnos(parseInt(alumno),parseInt(materia),parseInt(anio),tipo);
    return res.json(notas);
}
export const getNota=async(req:Request,res:Response)=>{
    const {anio,materia,alumno,tipo,trimestre}=req.params;
    console.log(req.params);
    const notasRep= getCustomRepository(NotasRepository);
    const nota=await notasRep.findNotaAlumnos(parseInt(alumno),parseInt(materia),parseInt(anio),tipo,parseInt(trimestre));
    return nota || 0;
    
}

export const cargarNotasAlumnos=async(req:Request,res:Response)=>{
    // En el body envio el id de materia y alumno, no hizo
    //falta buscar los objetos para establecer la relacion
    /* En el mismo cuerpo del body, en el objeto nota pondremos el tipo
    y se puede usar este mismo método para las mesas de examen y notas normales
    desde la app se manejara el atirbuto tipo */
    console.log('llego por red'+req.body);
    const calif=await getRepository(Nota).save(req.body);
     return res.json(calif);
}

/**Traer mesas de examen para el Menu Drawer */

export const getMesasDeExamen=async(req:Request,res:Response)=>{
    
    const{id,tipo,anio}=req.params;
    const mesas= await getCustomRepository(MesaExamenRepository)
        .findMesasDeExamen(parseInt(id),parseInt(anio),tipo);
    return res.json(mesas);
}

/**Traer lista de alumnos de una mesa de examen */
export const getMesaUnica=async(req:Request,res:Response)=>{
    const{id,anio}=req.params;
    console.log(`mesa id: ${id}`);
    const mesa=await getCustomRepository(MesaExamenRepository)
        .findMesaDeExamenById(parseInt(id));
        return res.json(mesa);
}


export const getAprobadosDesaprobadosPorMateria=async(req:Request,res:Response)=>{
    const {docente,cl,trimestre,materia,condicion}=req.params;
    const aprobadosDesaprobados= await getCustomRepository(NotasRepository)
        .getCantidadAprobadosDesaprobadosUnaMateria(condicion,parseInt(materia),parseInt(docente),parseInt(cl),parseInt(trimestre));
    return res.json(aprobadosDesaprobados);
   
}
export const getRdoEncuestaPorMateria= async(req:Request,res:Response)=>{
    const {docente,materia,cl,trimestre}=req.params;
    const resultadoEncuesta= await getCustomRepository(EncuestaRepository)
        .getDatosEncuestaDocenteMateria(parseInt(cl), parseInt(trimestre),parseInt(docente),parseInt(materia));
    return res.json(resultadoEncuesta);
    
}

