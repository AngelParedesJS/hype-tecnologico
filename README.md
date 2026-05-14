![NestJS + React Architecture](app/assets/images/NestJS-logo-wordmark.svg.png)
# HYPE TECNOLÓGICO - Monorepo

NestJS API + React (Vite) monorepo con npm workspaces.

---

## Instalacion
Se debe realizar en el Root del proyecto
```bash
npm install
```
---

## Ejecutar

Iniciar API y cliente en modo desarrollo:
Se debe realizar en el Root del proyecto
```bash
npm run start:dev
```

- API: http://localhost:3001
- Cliente: http://localhost:5173

---

## Compilar

Compilar todos los workspaces:
Se debe realizar en el Root del proyecto
```bash
npm run build
```

---

## Tests

### Backend (NestJS)

Se debe realizar en el Root del proyecto
```bash
npm run test --workspace=app/api
```

### Frontend (Vitest)

Se debe realizar en el Root del proyecto
```bash
npm run test --workspace=app/client
```

---

## Notas

- Las dependencias se gestionan desde la raiz con npm workspaces
- Ejecutar `npm install` solo desde el directorio raiz
- El `.gitignore` excluye `node_modules`, `dist` y archivos de construccion