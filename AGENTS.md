# AGENTS.md — FisioVital Web App

Instrucciones para agentes de IA (Claude Code, Copilot, Codex, Cursor…) que trabajen en este repositorio.
Las personas del equipo también deben seguirlas: son las reglas del proyecto escritas en un solo lugar.

## 1. Qué es el proyecto
Web App en Angular de FisioVital (curso 1ACC0236, UPC). Consume la API REST `fisiovital-web-services`
(Spring Boot, `http://localhost:8080/api/v1`) **sin datos simulados** y sigue los mock-ups de Figma.

## 2. Cómo correr y verificar
- `npm install` · `npm start` (http://localhost:4200) · `npm test` (Vitest) · `npm run build`.
- El backend debe estar levantado en :8080. URL en `src/environments/environment.ts`.
- Un cambio está terminado solo si `npm test` y `npm run build` pasan.

## 3. Arquitectura (obligatoria)
- Carpetas por bounded context, igual que el backend: `iam`, `profiles`, `scheduling`, `treatment`,
  `notifications`, `appointments`, `assistant`, `shared`. Dentro de cada uno: `model/`, `services/`,
  `components/`, `pages/`.
- Componentes **standalone** sin sufijo (`sign-in.ts`, clase `SignIn`), `inject()`, signals y control flow
  `@if` / `@for`. Rutas con `loadComponent` en `app.routes.ts`; providers globales en `app.config.ts`.
- **Consumo de APIs:** solo los archivos `*.api.ts` usan `HttpClient`. Los componentes nunca arman URLs.
- **Seguridad JWT:** el token lo agrega `iam/services/auth.interceptor.ts` (nunca a mano en un servicio);
  ante un 401 cierra la sesión. Las rutas privadas se protegen con `authGuard` y `roleGuard` (`auth.guard.ts`).
- **Formularios:** siempre reactivos (`FormBuilder`), con `[formGroup]` en el `<form>` y validadores que
  repitan las reglas del backend. Mostrar cada error con `<mat-error>`.
- **UI:** Angular Material, diseño *mobile-first* (sm → md → lg). Avisos con `FeedbackService`,
  confirmaciones con `ConfirmDialog`.

## 4. Política de uso de agentes de IA
1. **El humano es el autor y el responsable.** Todo cambio hecho con IA lo revisa, entiende y prueba un
   integrante antes de commitearlo. Si no puede explicarlo en la sustentación, no se sube.
2. **Datos y secretos:** no leer, imprimir ni subir `.env`, tokens, contraseñas ni datos reales de
   pacientes. Para pruebas se usan cuentas demo con correos `@example.com`.
3. **Sin datos simulados en producción:** la IA no puede inventar respuestas del backend ni dejar mocks
   fuera de los archivos `*.spec.ts`.
4. **Alcance acotado:** el agente solo modifica lo que pide la tarea. No borra archivos, no cambia
   dependencias mayores ni reformatea código ajeno sin que se lo pidan.
5. **Git:** Conventional Commits en inglés (`feat:`, `fix:`, `docs:`…), GitFlow (se trabaja en `develop`,
   `main` solo recibe releases). El agente **no hace push, PR ni releases** sin orden explícita.
6. **Nunca subir:** `node_modules/`, `dist/`, `.angular/`, `.env` ni archivos de configuración local.
7. **Accesibilidad e idiomas:** todo texto visible va en `public/i18n/es-419.json` y `en-US.json` (mismas
   claves); botones de ícono con `aria-label` y errores con `role="alert"`.
8. **Transparencia:** el uso de IA se declara en la bitácora del informe (qué se pidió y qué se revisó).

## 5. Checklist antes de entregar un cambio
- [ ] `npm test` y `npm run build` sin errores.
- [ ] Probado en el navegador contra el backend real (pestaña Network: cada petición lleva
      `Authorization: Bearer …`).
- [ ] Textos nuevos en los dos archivos de i18n.
- [ ] Si se agregó un endpoint, actualizar la tabla servicio → controller del README.
