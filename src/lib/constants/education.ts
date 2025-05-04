// src/lib/constants/education.ts

export const EDUCATION = [
  {
    title: "Perito Judicial",
    year: "En curso", // o puede ser "En curso"
    institute: "Colegio de Obstétricas de la Prov. Buenos Aires" // Aquí el instituto donde estudió
  },
  {
    title: "Tramo de formación Pedagógica",
    year: "En curso", // o puede ser "En curso"
    institute: "Universidad de FASTA" // Aquí el instituto donde estudió
  },
  {
    title: "Diplomatura en Ergonomía",
    year: "2016", // o puede ser "En curso"
    institute: "FADE. Universidad Kennedy" // Aquí el instituto donde estudió
  },
  {
    title: "Licenciatura en Seguridad e Higiene en el Trabajo",
    year: "2014", // o puede ser "En curso"
    institute: "Universidad de FASTA" // Aquí el instituto donde estudió
  },
  {
    title: "Técnico en Seguridad, Higiene y Control Ambiental Industrial",
    year: "2012", // o puede ser "En curso"
    institute: "Instituto Capacitare"
  },
  {
    title: "Bachiller en Ciencias Naturales",
    year: "2007", // o puede ser "En curso"
    institute: "Colegio del Norte"
  },
] as const;

export type EducationItem = typeof EDUCATION[number];