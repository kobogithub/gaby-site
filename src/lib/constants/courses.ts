export const COURSES = [
  {
    name: "Trabajo en altura y dispositivos de bloqueo",
    location: "De Pascale - Aldo Bonzi",
    date: "03/2025"
  },
  {
    name: "Conversatorio de trabajo en altura: Resolución 61/2020",
    location: "CPSH - Zárate",
    date: "06/2024"
  },
  {
    name: "PIBP",
    location: "Prefectura Naval Argentina - Campana",
    date: "01/2024"
  },
  {
    name: "Jornada de Capacitación Resolución 785/05 (Control de perdidas aéreas en tanques de almacenamiento de hidrocarburos)",
    location: "Auditorio Tenaris",
    date: "09/2023"
  },
  {
    name: "Manejo y Control de Emergencias con Materiales Peligrosos (HAZMAT - CZSH)",
    location: "Instituto Oscar Melillo CFL 401",
    date: "08/2023"
  },
  {
    name: "Jornada de Prevención de Riesgos Laborales (CZSH – Tenaris – SRT)",
    location: "Auditorio Tenaris",
    date: "06/2023"
  },
  {
    name: "Curso virtual de Bienestar Laboral",
    location: "FISO",
    date: "04/2023"
  },
  {
    name: "Curso de Primeros Auxilios",
    location: "Bomberos Voluntarios de Campana",
    date: "2018"
  },
  {
    name: "Curso de Primeros Auxilios",
    location: "Medivac",
    date: "2018"
  },
  {
    name: "Seminario Protocolo de Ergonomía",
    location: "IAS",
    date: "2016"
  },
  {
    name: "Seminario Materiales Peligrosos",
    location: "CIQUIME",
    date: "2012"
  },
  {
    name: "Seminario Prevención de Riesgos en la Industria",
    location: "UTN",
    date: "2012"
  },
  {
    name: "Curso de Primeros Auxilios",
    location: "Cruz Roja",
    date: "2012"
  }
] as const;

export type CourseItem = typeof COURSES[number];