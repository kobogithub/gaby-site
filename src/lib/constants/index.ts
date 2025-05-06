import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import XIcon from '@/components/ui/icons/x.astro'
import GithubIcon from '@/components/ui/icons/github.astro'

export const NAV_LINKS = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Experiencia",
    href: "/experience",
  },
  {
    label: "Educación",
    href: "/education",
  },
  {
    label: "Cursos",
    href: "/courses",
  },
  {
    label: "Servicios",
    href: "/services",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/gabriela-julieta-barreto-80305457/",
  }
];