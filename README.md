# Sitio Web Profesional - Gabriela Barreto

![Screenshot](./public/screenshot-dark.png)

## Descripción General
Este es un sitio web profesional moderno construido con **Astro**, diseñado para Gabriela Barreto, Licenciada en Higiene y Seguridad en el Trabajo. El sitio presenta sus servicios profesionales, experiencia, educación, cursos y artículos especializados en seguridad laboral.

## Características
- 🌙 **Modo Claro & Oscuro** – Cambio fluido entre temas.
- 📱 **Diseño Responsive** – Totalmente adaptable a dispositivos móviles.
- 📖 **Sección de Artículos** – Soporte de **MDX** con tabla de contenidos automática y paginación.
- 🏷️ **Artículos Categorizados** – Filtrado por series o categorías.
- 🚀 **Portafolio de Proyectos** – Vista detallada de proyectos con imágenes y descripciones.
- 💼 **Sección de Servicios** – Consultoría técnica especializada y estudios ambientales.
- 👔 **Experiencia Profesional** – Timeline de experiencia laboral.
- 🎓 **Educación y Cursos** – Formación académica y cursos especializados.
- 🖼️ **SEO & Open Graph** – Metadatos optimizados e imágenes OG dinámicas.
- 🐳 **Docker Ready** – Containerización con Nginx para producción.
- 🎨 **Diseño Elegante** – Enfocado en simplicidad y profesionalismo.

## Stack Tecnológico
Construido con las siguientes tecnologías:

- **Astro 5.5** – Generación estática de sitios ultrarrápida.
- **TailwindCSS 4.0** – Framework CSS utility-first altamente personalizable.
- **TypeScript** – Type safety estricto para mejor mantenibilidad.
- **React 19** – Componentes interactivos.
- **MDX** – Markdown con componentes JSX.
- **Framer Motion** – Animaciones y transiciones fluidas.
- **Prettier + ESLint** – Formato de código y linting.
- **Docker + Nginx** – Containerización y servidor web en producción.

## Personalización
La personalización es simple y directa:

- Todos los datos personalizables (nombre, enlaces, contenido, etc.) están en `src/lib/constants/`:
  - `profile.ts` – Información personal
  - `services.ts` – Servicios profesionales
  - `experience.ts` – Experiencia laboral
  - `education.ts` – Formación académica
  - `courses.ts` – Cursos y capacitaciones
  - `skills.ts` – Habilidades técnicas
  - `tech-stack.ts` – Tecnologías utilizadas
- Configuración del sitio en `src/lib/config.ts`
- Imágenes en la carpeta `public/`
- Imágenes OG para blogs y proyectos en `public/og-images/`
- Artículos en `src/data/blog/`
- Proyectos en `src/data/projects/`

## Comandos Disponibles

```bash
# Desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview
```

## Deployment con Docker

El proyecto incluye configuración Docker completa:

```bash
# Build y ejecutar con Docker Compose
docker-compose up -d

# El sitio estará disponible en http://localhost:8084
```

### Características del Deployment
- **Multi-stage build** para optimizar tamaño de imagen
- **Nginx** como servidor web en producción
- **Health checks** configurados
- **Resource limits** (CPU: 0.5, RAM: 512M)
- Puerto expuesto: 8084

## Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── sections/    # Secciones del sitio
│   └── ui/          # Componentes de interfaz
├── data/            # Contenido en MDX
│   ├── blog/        # Artículos
│   └── projects/    # Proyectos
├── layouts/         # Layouts de página
├── lib/             # Utilidades y constantes
│   └── constants/   # Datos personalizables
├── pages/           # Rutas del sitio
└── styles/          # Estilos globales
```

## Información del Sitio

- **Autor**: Gabriela Barreto
- **Rol**: Licenciada en Higiene y Seguridad en el Trabajo
- **Sitio**: https://gabrielabarreto.site
- **Email**: gabrielajbarreto@gmail.com

## Contribuir
¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub! Las contribuciones son bienvenidas—ya sea corrigiendo un bug, agregando una nueva funcionalidad o corrigiendo un pequeño typo.

---

Construido con ❤️ usando **Astro**.
