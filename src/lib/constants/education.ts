// src/lib/constants/education.ts

export const EDUCATION = [
  {
    title: "Licenciatura en Seguridad e Higiene en el Trabajo",
    year: "2014", // o puede ser "En curso"
    institute: "Universidad de FASTA" // Aquí el instituto donde estudió
  }
  // Aquí puedes agregar más entradas educacionales
] as const;

export type EducationItem = typeof EDUCATION[number];