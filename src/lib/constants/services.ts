// src/lib/constants/services.ts

export const SERVICES_TITLE = "Servicios Profesionales";

export const SERVICES = [
  {
    category: "Consultoría técnica especializada",
    items: [
      "Programas de seguridad",
      "Análisis de trabajo seguro",
      "Planes de capacitación (anuales y adaptadas a las necesidades de la empresa)",
      "Curso de trabajo seguro en Altura (Res. SRT 61/23)",
      "Planes de emergencia, evacuación y simulacros",
      "Planos de evacuación",
      "Mapas de riesgo",
      "Habilitaciones municipales y representación legal",
      "Relevamiento general de riesgos laborales (RGRL)",
      "Relevamiento de agentes de riesgo (RAR)",
      "Investigación de accidentes e incidentes",
      "Visitas técnicas periódicas",
      "Asesoramiento en cumplimiento normativo"
    ]
  },
  {
    category: "Estudios y mediciones ambientales",
    items: [
      "Carga de fuego",
      "Protocolos de mediciones",
      "Iluminación (Res. 84/12)",
      "Ruido (Res. 85/12)",
      "Ergonomía (Res. 886/15)"
    ]
  }
] as const;

export type ServiceCategory = typeof SERVICES[number];