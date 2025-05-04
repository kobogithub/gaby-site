// src/lib/constants/experience.ts

export const EXPERIENCES = [
  {
    date: "02/2024 al 01/2025",
    company: "Carjor SRL",
    subcontractor: "Consultora OSP",
    present: false,
    position: "Responsable de higiene y seguridad en el trabajo",
    role: "Asesorías de higiene y seguridad en la obra de Carem 25."
  },
  {
    date: "01/2025",
    company: "Tecnoclima S.A.",
    subcontractor: "",
    present: true,
    position: "Responsable de higiene y seguridad en el trabajo",
    role: "Asesorías de higiene y seguridad, capacitaciones, check list en diferentes ubicaciones del servicio."
  },
  {
    date: "12/2024",
    company: "Transir S.R.L.",
    subcontractor: "Consultora OSP",
    present: true,
    position: "Responsable de higiene y seguridad en el trabajo",
    role: "Asesorías de higiene y seguridad en la obra de ASQECQ II."
  },
] as const;

export type ExperienceItem = typeof EXPERIENCES[number];