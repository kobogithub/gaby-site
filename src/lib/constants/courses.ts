// src/lib/constants/courses.ts

export const COURSES = [
  {
    name: "Curso avanzado de Seguridad Industrial",
    location: "Instituto de Capacitación Laboral",
    date: "12/2023"
  }
  // Aquí puedes agregar más cursos
] as const;

export type CourseItem = typeof COURSES[number];