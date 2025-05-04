// src/lib/constants/skills.ts

export const SKILLS = [
  {
    category: "Idiomas",
    items: ["Inglés Básico"]
  },
  {
    category: "Sistemas",
    items: ["Windows"]
  },
  {
    category: "Software",
    items: ["Paquete Office"]
  }
] as const;

export type Skill = typeof SKILLS[number];