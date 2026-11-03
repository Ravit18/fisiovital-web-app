# FisioVital

Aplicación web responsiva para gestionar centros de fisioterapia: el paciente busca fisioterapeutas, reserva y
sigue su tratamiento; el fisioterapeuta publica horarios y revisa su agenda y el historial de sus pacientes.

> Instrucciones para los agentes de IA y para las personas del equipo.
> Curso 1ACC0236 Ingeniería de Software, UPC 2026-20.

## Datos
- Figma: _pendiente: pegar aquí el enlace del Figma del equipo_
- UI: Angular Material 22 (tema Material 3) e íconos Material Symbols Outlined
- Idiomas: ngx-translate (`es-419` por defecto y `en-US`)
- Backend: `fisiovital-web-services` (Spring Boot) en `http://localhost:8080/api/v1` (`src/environments/environment.ts`)
- Pruebas: Vitest

## Cómo trabajar
Haz solo la pantalla o el cambio que te pidan. Léelo en el Figma, implementa y verifica:
`npm test` y `npm run build` sin errores, y la pantalla probada contra el backend real.
Al terminar, lista los archivos creados o modificados y qué quedó pendiente.
No toques rutas, layouts ni la guía de estilo si la tarea no lo pide.

## Estructura
Sigue la siguiente estructura:

```
src/app/
├── app.ts                           # Raíz: enlace "saltar al contenido" y <router-outlet>
├── app.config.ts                    # Providers globales: router, HttpClient + interceptores, i18n
├── app.routes.ts                    # "/" carga home; cada grupo con loadChildren y su layout
├── home/                            # Landing: una página en "/", sin layout
│   └── home.ts · home.html · home.scss
├── layouts/                         # Un layout por grupo
│   ├── auth-layout/                 # Pantallas de acceso: sin barra ni menú
│   └── main-layout/                 # Barra, menú según el rol, campana de notificaciones y pie
├── pages/
│   ├── auth/                        # Grupo de acceso (se nombra por su función)
│   │   ├── auth.routes.ts           # /sign-in, /sign-up
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── patient/                     # Grupo por tipo de usuario
│   │   ├── patient.routes.ts        # /physiotherapists, /physiotherapists/:id, /treatment-plans, /appointments
│   │   ├── physiotherapist-search/
│   │   ├── physiotherapist-profile/
│   │   ├── treatment-plans/
│   │   └── my-appointments/
│   ├── physiotherapist/
│   │   ├── physiotherapist.routes.ts # /availability, /agenda, /patients
│   │   ├── publish-slots/
│   │   ├── agenda/
│   │   └── patient-history/
│   └── common/                      # Pantallas de los dos roles
│       ├── common.routes.ts         # /home, /notifications, /assistant
│       ├── dashboard/
│       ├── notifications/
│       ├── assistant-chat/
│       ├── terms/                   # /terms (pública)
│       └── not-found/               # cualquier otra URL
├── components/                      # Solo piezas reutilizadas por varias páginas
│   └── confirm-dialog · edit-plan-dialog · reschedule-dialog · slot-picker · session-status-chip · language-switcher
├── services/                        # *.api.ts (HttpClient), AuthService, guards, interceptores, stores
├── model/                           # Interfaces con los campos de los DTO del backend
│                                    #   *.entity.ts ↔ dto/response · *.request.ts ↔ dto/request
├── styles/                          # Guía de estilo (_style-guide.scss) y estilos compartidos de listas
└── utils/                           # Utilidades (fechas)
```
Un grupo es un conjunto de pantallas que comparten el mismo layout y el mismo guard (`patient` y
`physiotherapist` usan `roleGuard`; `auth` usa `guestGuard`). Las URLs no llevan el nombre del grupo.

## Alcance
Cada pantalla se conecta al backend real: nada de datos simulados fuera de los `*.spec.ts`.

- **Sí:** formularios reactivos con validaciones que repiten las reglas del backend, listas con `@for` sobre
  datos del backend, estado con `signal` / `computed`, servicios con `inject()`, errores del backend con su
  `message` traducido, navegación con `routerLink` y `Router`.
- **No:** inventar respuestas, URLs fijas fuera de `environment.ts`, lógica de negocio que ya hace el backend
  (por ejemplo calcular si un cambio es tardío) ni pantallas que no estén en el Figma.
- Estados alternativos (cargando, vacío, error, sin conexión) son estados de la misma pantalla, no rutas.
- Si dudas, pregunta. No inventes pantallas.

## Reglas
- **Angular:** componentes standalone sin sufijo (`sign-in.ts`, clase `SignIn`), un `.ts`, `.html` y `.scss` por
  pantalla, nombres en minúsculas y guiones. Signals, `inject()` y rutas con `loadComponent` / `loadChildren`.
- **Control flow:** usa `@if`, `@for` (siempre con `track`) y `@switch`. Nunca `*ngIf`, `*ngFor` ni `ngSwitch`.
- **Consumo de APIs:** solo los archivos `services/*.api.ts` usan `HttpClient`; las páginas nunca arman URLs.
  Cada interfaz de `model/` lleva un comentario con el DTO del backend al que corresponde.
- **Seguridad JWT:** el token lo agrega `services/auth.interceptor.ts` (nunca a mano en un servicio); ante un
  401 cierra la sesión. Las rutas privadas se protegen por grupo en `app.routes.ts`.
- **Formularios:** Reactive Forms (`FormBuilder`) con `[formGroup]` en el `<form>`. Al enviar un formulario
  inválido se llama a `markAllAsTouched()` y no se llama al backend. El mensaje va debajo del campo al tocarlo:
  `<mat-error>` en los campos de Material, o un texto con `aria-describedby` en los formularios propios
  (sign-in, sign-up).
- **UI:** usa los componentes de Angular Material en lugar de HTML a mano. Avisos con `FeedbackService`,
  confirmaciones con `ConfirmDialog`.
- **Guía de estilo:** colores y fuentes solo con las variables de `styles/_style-guide.scss`
  (`var(--fv-color-primary)`); no escribir HEX sueltos en los componentes.
- **Diseño:** cada pantalla es responsiva (escritorio y móvil) y respeta el Figma.
- **Idiomas y accesibilidad:** todo texto visible va en `public/i18n/es-419.json` y `en-US.json` (mismas
  claves). Botones de ícono con `aria-label`, errores con `role="alert"`, cada layout con su
  `<main id="main-content">`.
- **Git:** Conventional Commits en inglés (`feat:`, `fix:`, `docs:`…) y GitFlow: cada integrante trabaja en su
  `feature/*`, abre PR a `develop`, y `main` solo recibe releases. Nunca subir `node_modules/`, `dist/`,
  `.angular/`, `.gitignore`, `.env` ni un `angular.json` con `analytics`.

## Uso de IA
1. **El humano es el autor y el responsable.** Todo cambio hecho con IA lo revisa, entiende y prueba un
   integrante antes de commitearlo. Si no puede explicarlo en la sustentación, no se sube.
2. **Datos y secretos:** no leer, imprimir ni subir `.env`, tokens, contraseñas ni datos reales de pacientes.
   Para pruebas se usan cuentas demo con correos `@example.com`.
3. **Alcance acotado:** el agente solo modifica lo que pide la tarea. No borra archivos, no cambia dependencias
   mayores ni reformatea código ajeno sin que se lo pidan, y no hace push, PR ni releases sin orden explícita.
4. **Transparencia:** el uso de IA se declara en la bitácora del informe (qué se pidió y qué se revisó).
