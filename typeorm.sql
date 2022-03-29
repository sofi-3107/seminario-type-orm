-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-03-2022 a las 05:55:41
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `typeorm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id` int(11) NOT NULL,
  `apellido` varchar(25) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombre` varchar(25) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `dni` varchar(8) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `tutorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id`, `apellido`, `nombre`, `dni`, `telefono`, `email`, `tutorId`) VALUES
(1, 'Juarez', 'Emanuel', '34066052', '4235389', 'emanuel@gmail.com', NULL),
(2, 'Morales', 'Paulina', '58741236', '378963254', 'paulina@gmail.com', NULL),
(3, 'Rodriguez', 'Leonardo', '25874123', '4785236', 'leo@nada.com.ar', NULL),
(4, 'Ibañez', 'Eleonora', '25874123', '4852369', 'eleo@gmail.com', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_curso`
--

CREATE TABLE `alumno_curso` (
  `id` int(11) NOT NULL,
  `cicloLectivo` int(11) NOT NULL,
  `alumnoId` int(11) NOT NULL,
  `cursoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `alumno_curso`
--

INSERT INTO `alumno_curso` (`id`, `cicloLectivo`, `alumnoId`, `cursoId`) VALUES
(1, 2021, 1, 1),
(2, 2021, 2, 1),
(3, 2021, 3, 2),
(4, 2021, 4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_mesa_examen`
--

CREATE TABLE `alumno_mesa_examen` (
  `mesaExamenId` int(11) NOT NULL,
  `alumnoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `alumno_mesa_examen`
--

INSERT INTO `alumno_mesa_examen` (`mesaExamenId`, `alumnoId`) VALUES
(1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `id` int(11) NOT NULL,
  `fecha` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `tardanza` int(11) NOT NULL DEFAULT 0,
  `estado` enum('ausente','presente') COLLATE utf8mb4_spanish2_ci NOT NULL DEFAULT 'ausente',
  `cicloLectivo` int(11) NOT NULL,
  `alumnoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `asistencia`
--

INSERT INTO `asistencia` (`id`, `fecha`, `tardanza`, `estado`, `cicloLectivo`, `alumnoId`) VALUES
(1, '05/03/2021', 0, 'presente', 2021, 1),
(2, '04/03/2021', 0, 'presente', 2021, 1),
(3, '23/03/2021', 0, 'ausente', 2021, 1),
(4, '23/03/2021', 0, 'ausente', 2021, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `id` int(11) NOT NULL,
  `division` int(11) NOT NULL,
  `preceptorId` int(11) DEFAULT NULL,
  `turno` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `curso_nivel` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`id`, `division`, `preceptorId`, `turno`, `curso_nivel`) VALUES
(1, 1, 1, 'Mañana', 1),
(2, 1, 1, 'Tarde', 2),
(3, 1, 2, 'Mañana', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_nivel`
--

CREATE TABLE `curso_nivel` (
  `id` int(11) NOT NULL,
  `nivel` int(11) NOT NULL,
  `ciclo` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `curso_nivel`
--

INSERT INTO `curso_nivel` (`id`, `nivel`, `ciclo`) VALUES
(1, 1, 'Basico'),
(2, 2, 'Basico'),
(3, 1, 'Superior'),
(4, 2, 'Superior'),
(5, 3, 'Superior'),
(6, 4, 'Superior');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE `docente` (
  `id` int(11) NOT NULL,
  `apellido` varchar(25) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombre` varchar(25) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `dni` varchar(8) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `docente`
--

INSERT INTO `docente` (`id`, `apellido`, `nombre`, `dni`, `telefono`, `email`) VALUES
(1, 'Pedraza', 'Marianela', '14523698', '4235389', 'pema@gmail.com'),
(2, 'Sueldo', 'Rafael', '20145879', '42369857', 'rfa@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente_materia`
--

CREATE TABLE `docente_materia` (
  `id` int(11) NOT NULL,
  `docenteId` int(11) NOT NULL,
  `materiaId` int(11) NOT NULL,
  `cicloLectivo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `docente_materia`
--

INSERT INTO `docente_materia` (`id`, `docenteId`, `materiaId`, `cicloLectivo`) VALUES
(1, 1, 3, 2022),
(2, 2, 4, 2021),
(3, 1, 11, 2021),
(7, 2, 11, 2021),
(8, 1, 12, 2021),
(9, 1, 13, 2021),
(10, 2, 14, 2021),
(11, 2, 15, 2021);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente_materia_encuesta`
--

CREATE TABLE `docente_materia_encuesta` (
  `docenteMateriaId` int(11) NOT NULL,
  `encuestaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `docente_materia_encuesta`
--

INSERT INTO `docente_materia_encuesta` (`docenteMateriaId`, `encuestaId`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente_mesa_examen`
--

CREATE TABLE `docente_mesa_examen` (
  `id` int(11) NOT NULL,
  `docenteId` int(11) NOT NULL,
  `mesaExamenId` int(11) NOT NULL,
  `isPresidente` tinyint(4) NOT NULL,
  `descargo` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `docente_mesa_examen`
--

INSERT INTO `docente_mesa_examen` (`id`, `docenteId`, `mesaExamenId`, `isPresidente`, `descargo`) VALUES
(1, 1, 1, 1, ''),
(2, 2, 1, 0, ''),
(3, 1, 2, 1, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encuesta`
--

CREATE TABLE `encuesta` (
  `id` int(11) NOT NULL,
  `cicloLectivo` int(11) NOT NULL,
  `trimestre` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id_pregunta` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `encuesta`
--

INSERT INTO `encuesta` (`id`, `cicloLectivo`, `trimestre`, `cantidad`, `id_pregunta`) VALUES
(1, 2021, 1, 2, 4),
(2, 2021, 1, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `curso_nivel` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id`, `nombre`, `curso_nivel`) VALUES
(3, 'Lengua I', 1),
(4, 'Matematica I', 1),
(11, 'Ingles I', 1),
(12, 'Formacion Etica I', 1),
(13, 'Geografia II', 2),
(14, 'DIbujo Tecnico II', 2),
(15, 'Fisica I', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesa_examen`
--

CREATE TABLE `mesa_examen` (
  `id` int(11) NOT NULL,
  `fecha` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `horaInicio` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `horaFin` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `materiaId` int(11) DEFAULT NULL,
  `tipo` enum('examen regular','examen pendientes') COLLATE utf8mb4_spanish2_ci NOT NULL DEFAULT 'examen regular',
  `anio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `mesa_examen`
--

INSERT INTO `mesa_examen` (`id`, `fecha`, `horaInicio`, `horaFin`, `materiaId`, `tipo`, `anio`) VALUES
(1, '04/03/2021', '8:00', '10:00', 3, '', 2021),
(2, '14/04/2021', '10:00', '12:00', 11, '', 2022),
(3, '23/03/2021', '14:00', '16:00', 3, 'examen pendientes', 2021),
(4, '24/03/2021', '15:00', '17:00', 15, 'examen regular', 2021),
(5, '25/03/2021', '08:00', '10:00', 12, 'examen regular', 2021);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nota`
--

CREATE TABLE `nota` (
  `id` int(11) NOT NULL,
  `trimestre` int(11) NOT NULL,
  `cicloLectivo` int(11) NOT NULL,
  `materiaId` int(11) DEFAULT NULL,
  `fecha` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `calificacion` double NOT NULL,
  `tipo` enum('normal','examen regular','examen pendiente') COLLATE utf8mb4_spanish2_ci NOT NULL DEFAULT 'normal',
  `alumnoId` int(11) DEFAULT NULL,
  `condicionMateria` enum('aprobado','aprobado en mesa de examen','pendiente','desaprobado') COLLATE utf8mb4_spanish2_ci NOT NULL DEFAULT 'desaprobado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `nota`
--

INSERT INTO `nota` (`id`, `trimestre`, `cicloLectivo`, `materiaId`, `fecha`, `calificacion`, `tipo`, `alumnoId`, `condicionMateria`) VALUES
(1, 1, 2021, 3, '', 10, 'normal', 1, 'desaprobado'),
(2, 1, 2021, 4, '', 8, 'normal', 2, 'desaprobado'),
(3, 1, 2021, 11, '', 6, 'normal', 3, 'desaprobado'),
(4, 1, 2021, 3, '', 10, 'normal', 4, 'desaprobado'),
(5, 2, 2021, 4, '', 8, 'normal', 1, 'desaprobado'),
(6, 2, 2021, 11, '', 6, 'normal', 2, 'desaprobado'),
(8, 1, 2021, 3, '10/03/2021', 8, 'normal', 1, 'desaprobado'),
(10, 1, 2021, 11, '10/03/2021', 5, 'normal', 1, 'desaprobado'),
(11, 1, 2021, 12, '09/03/2021', 6, 'normal', 1, 'desaprobado'),
(19, 1, 2021, 14, '23/03/2021', 8, 'normal', 4, 'desaprobado'),
(20, 1, 2022, 15, '25/03/2021', 7, 'normal', 3, 'desaprobado'),
(21, 1, 2022, 15, '28/03/2021', 6, 'normal', 4, 'desaprobado'),
(22, 1, 2021, 13, '24/03/2021', 8, 'normal', 2, 'desaprobado');

--
-- Disparadores `nota`
--
DELIMITER $$
CREATE TRIGGER `set_condicionMateria` AFTER INSERT ON `nota` FOR EACH ROW BEGIN
	IF @calificacion> 5 THEN   
  		SET @condicionMateria='aprobado';
    ELSEIF @calificacion < 6 THEN  
    	SET @condicionMateria='desaprobado';
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preceptor`
--

CREATE TABLE `preceptor` (
  `id` int(11) NOT NULL,
  `apellido` varchar(25) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombre` varchar(25) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `dni` varchar(8) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `preceptor`
--

INSERT INTO `preceptor` (`id`, `apellido`, `nombre`, `dni`, `telefono`, `email`) VALUES
(1, 'Gonzalez', 'Valeria', '12587456', '3876521456', 'valeg@gmail.com'),
(2, 'Flores', 'Eduardo Albino', '36987452', '3874125896', 'eduflor@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `id` int(11) NOT NULL,
  `consigna` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`id`, `consigna`) VALUES
(1, 'Estoy satisfecho con la materia.'),
(2, 'No entiendo la materia.'),
(3, 'No me interesa la materia.'),
(4, 'El profesor no enseña bien.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tramite`
--

CREATE TABLE `tramite` (
  `id` int(11) NOT NULL,
  `fecha` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `tipo` enum('titulo','pase') COLLATE utf8mb4_spanish2_ci NOT NULL DEFAULT 'pase',
  `fase` enum('sin actividad','iniciado','enviado','en proceso','finalizado') COLLATE utf8mb4_spanish2_ci NOT NULL DEFAULT 'sin actividad',
  `alumnoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tutor`
--

CREATE TABLE `tutor` (
  `id` int(11) NOT NULL,
  `apellido` varchar(25) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombre` varchar(25) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `dni` varchar(8) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_0e2b815be2dde3db96ed04cbb79` (`tutorId`);

--
-- Indices de la tabla `alumno_curso`
--
ALTER TABLE `alumno_curso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_7eca2b2425c7bc5a5d1e10191ba` (`alumnoId`),
  ADD KEY `FK_39fae1aff54cc770bf4bfa4095b` (`cursoId`);

--
-- Indices de la tabla `alumno_mesa_examen`
--
ALTER TABLE `alumno_mesa_examen`
  ADD PRIMARY KEY (`mesaExamenId`,`alumnoId`),
  ADD KEY `IDX_15da62c68c724a74c2db5259a8` (`mesaExamenId`),
  ADD KEY `IDX_9d6dabb914b0c2817e41b7deea` (`alumnoId`);

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_f07d6398568efae75343340e8e5` (`alumnoId`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_87b9ce82d3f5c646fd7cbbadae9` (`preceptorId`),
  ADD KEY `FK_f3d48b6096649559e96687e557e` (`curso_nivel`);

--
-- Indices de la tabla `curso_nivel`
--
ALTER TABLE `curso_nivel`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `docente_materia`
--
ALTER TABLE `docente_materia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_0ef8d9600057bb20e4d1c727431` (`docenteId`),
  ADD KEY `FK_52081b35757af6b87e878f9a0e0` (`materiaId`);

--
-- Indices de la tabla `docente_materia_encuesta`
--
ALTER TABLE `docente_materia_encuesta`
  ADD PRIMARY KEY (`docenteMateriaId`,`encuestaId`),
  ADD KEY `IDX_2c5d088eb805b226ae31bbfd80` (`docenteMateriaId`),
  ADD KEY `IDX_a31ddf824351b585866b2b1698` (`encuestaId`);

--
-- Indices de la tabla `docente_mesa_examen`
--
ALTER TABLE `docente_mesa_examen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_fedc904360d0383ac12e9f037bd` (`docenteId`),
  ADD KEY `FK_43c5ed01ea2230b25abb9b5e96d` (`mesaExamenId`);

--
-- Indices de la tabla `encuesta`
--
ALTER TABLE `encuesta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_0459bc9a31d5137456869dd9a50` (`id_pregunta`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ad118959e031d742ddd4119cbbe` (`curso_nivel`);

--
-- Indices de la tabla `mesa_examen`
--
ALTER TABLE `mesa_examen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_1c1509cd9dc76ece9da029c5a62` (`materiaId`);

--
-- Indices de la tabla `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_a1402c54964fc90026454b5059d` (`materiaId`),
  ADD KEY `FK_e03b8d4a158652301243b7bef30` (`alumnoId`);

--
-- Indices de la tabla `preceptor`
--
ALTER TABLE `preceptor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tramite`
--
ALTER TABLE `tramite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_bc3c5dc249d6eb8d516853380dd` (`alumnoId`);

--
-- Indices de la tabla `tutor`
--
ALTER TABLE `tutor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `alumno_curso`
--
ALTER TABLE `alumno_curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `curso_nivel`
--
ALTER TABLE `curso_nivel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `docente`
--
ALTER TABLE `docente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `docente_materia`
--
ALTER TABLE `docente_materia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `docente_mesa_examen`
--
ALTER TABLE `docente_mesa_examen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `encuesta`
--
ALTER TABLE `encuesta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `mesa_examen`
--
ALTER TABLE `mesa_examen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `nota`
--
ALTER TABLE `nota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `preceptor`
--
ALTER TABLE `preceptor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tramite`
--
ALTER TABLE `tramite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tutor`
--
ALTER TABLE `tutor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `FK_0e2b815be2dde3db96ed04cbb79` FOREIGN KEY (`tutorId`) REFERENCES `tutor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `alumno_curso`
--
ALTER TABLE `alumno_curso`
  ADD CONSTRAINT `FK_39fae1aff54cc770bf4bfa4095b` FOREIGN KEY (`cursoId`) REFERENCES `curso` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_7eca2b2425c7bc5a5d1e10191ba` FOREIGN KEY (`alumnoId`) REFERENCES `alumno` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `alumno_mesa_examen`
--
ALTER TABLE `alumno_mesa_examen`
  ADD CONSTRAINT `FK_15da62c68c724a74c2db5259a8e` FOREIGN KEY (`mesaExamenId`) REFERENCES `mesa_examen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_9d6dabb914b0c2817e41b7deea9` FOREIGN KEY (`alumnoId`) REFERENCES `alumno` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `FK_f07d6398568efae75343340e8e5` FOREIGN KEY (`alumnoId`) REFERENCES `alumno` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `FK_87b9ce82d3f5c646fd7cbbadae9` FOREIGN KEY (`preceptorId`) REFERENCES `preceptor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_f3d48b6096649559e96687e557e` FOREIGN KEY (`curso_nivel`) REFERENCES `curso_nivel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `docente_materia`
--
ALTER TABLE `docente_materia`
  ADD CONSTRAINT `FK_0ef8d9600057bb20e4d1c727431` FOREIGN KEY (`docenteId`) REFERENCES `docente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_52081b35757af6b87e878f9a0e0` FOREIGN KEY (`materiaId`) REFERENCES `materia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `docente_materia_encuesta`
--
ALTER TABLE `docente_materia_encuesta`
  ADD CONSTRAINT `FK_2c5d088eb805b226ae31bbfd801` FOREIGN KEY (`docenteMateriaId`) REFERENCES `docente_materia` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_a31ddf824351b585866b2b16986` FOREIGN KEY (`encuestaId`) REFERENCES `encuesta` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `docente_mesa_examen`
--
ALTER TABLE `docente_mesa_examen`
  ADD CONSTRAINT `FK_43c5ed01ea2230b25abb9b5e96d` FOREIGN KEY (`mesaExamenId`) REFERENCES `mesa_examen` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_fedc904360d0383ac12e9f037bd` FOREIGN KEY (`docenteId`) REFERENCES `docente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `encuesta`
--
ALTER TABLE `encuesta`
  ADD CONSTRAINT `FK_0459bc9a31d5137456869dd9a50` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `materia`
--
ALTER TABLE `materia`
  ADD CONSTRAINT `FK_ad118959e031d742ddd4119cbbe` FOREIGN KEY (`curso_nivel`) REFERENCES `curso_nivel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `mesa_examen`
--
ALTER TABLE `mesa_examen`
  ADD CONSTRAINT `FK_1c1509cd9dc76ece9da029c5a62` FOREIGN KEY (`materiaId`) REFERENCES `materia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `nota`
--
ALTER TABLE `nota`
  ADD CONSTRAINT `FK_a1402c54964fc90026454b5059d` FOREIGN KEY (`materiaId`) REFERENCES `materia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_e03b8d4a158652301243b7bef30` FOREIGN KEY (`alumnoId`) REFERENCES `alumno` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tramite`
--
ALTER TABLE `tramite`
  ADD CONSTRAINT `FK_bc3c5dc249d6eb8d516853380dd` FOREIGN KEY (`alumnoId`) REFERENCES `alumno` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
