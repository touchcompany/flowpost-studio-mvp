# Flowpost Studio MVP

Primer prototipo para una app sencilla tipo Metricool enfocada en publicar o programar contenido en Instagram, Facebook y TikTok.

## Framework detectado

No usa Vite, React ni Next.js. Es una app HTML/CSS/JavaScript con backend local en Node puro.

## Pantallas

- Landing comercial: pagina publica con propuesta, funciones, publicos y planes.
- Login: creacion de cuenta MVP local con Google/Facebook/email simulados y plan seleccionado.
- Onboarding: configuracion de primera empresa, redes y carpeta de contenido antes del dashboard.
- Crear publicacion: composer unico con selector de formato, plataformas y programacion.
- Empresas: crear marcas y cambiar la empresa activa.
- Biblioteca: ubicacion Drive/iCloud por empresa y selector visual de videos.
- Video: elegir desde la biblioteca de la empresa o pegar enlace manual `https`.
- Portada: previsualizacion vertical 1080 x 1920, feed 1080 x 1350, horizontal 1920 x 1080 y cuadrado 1080 x 1080.
- Calendario: vista editorial simple de trabajos programados.
- Cuentas: estado de conexiones OAuth por empresa.
- Configuracion tecnica: redirect URIs, variables faltantes y estado por proveedor.
- Cola: trabajos internos por plataforma.

## Siguiente capa tecnica

1. Reemplazar `data/db.json` por Postgres.
2. Formalizar tablas `companies`, `social_accounts`, `media_sources`, `media_assets`, `posts` y `post_jobs`.
3. Integrar Google Picker + Drive API para seleccionar carpetas y videos de Google Drive.
4. En iOS/macOS, usar Document Picker/iCloud Drive; en web, usar enlaces compartidos o un flujo propio de importacion.
5. Importar videos seleccionados hacia almacenamiento propio.
6. Guardar archivos y portadas en S3, R2 o Supabase Storage.
7. Crear conectores `MetaPublisher` y `TikTokPublisher`.
8. Ejecutar trabajos con una cola: BullMQ, Temporal o Cloud Tasks.
9. Registrar estados por plataforma: `pending`, `uploading`, `published`, `failed`.

## Base de datos recomendada para cPanel

La opcion recomendada para comercializar este MVP es:

- App en cPanel, preferiblemente con Node.js App Manager si el hosting lo permite.
- Base de datos externa en Supabase Postgres.
- Archivos, portadas y videos en Supabase Storage o Cloudflare R2.

Esto mantiene el despliegue simple, pero deja la app preparada para usuarios, permisos, almacenamiento de archivos y sincronizacion moderna.

Alternativa si todo debe quedarse dentro de cPanel:

- Usar MySQL/MariaDB.
- Mantener un backend Node o PHP como API.
- Guardar videos como enlaces externos, no como archivos pesados dentro del hosting compartido.

Para esta app, Supabase es mejor como primera base real porque ya trae Postgres, Auth, Storage y Realtime. MySQL/MariaDB es mas simple dentro de cPanel, pero luego exige construir mas piezas manualmente.

Tablas sugeridas:

- `companies`
- `social_accounts`
- `media_sources`
- `media_assets`
- `posts`
- `post_jobs`
- `users`
- `company_members`

## Ejecutar

Desde esta carpeta:

```bash
npm install
npm start
```

Abrir `http://127.0.0.1:4176`.

En desarrollo local puedes usar `npm run dev`. En cPanel Node.js usa `npm start` o configura el startup file como `cpanel-server.js`.

Rutas principales:

- `http://127.0.0.1:4176/landing.html`
- `http://127.0.0.1:4176/login.html`
- `http://127.0.0.1:4176/onboarding.html`
- `http://127.0.0.1:4176/index.html`

## Probar que funciona

Ver [QA_CHECKLIST.md](./QA_CHECKLIST.md). La app tambien incluye un panel `Estado real del sistema` dentro de Cuentas para distinguir funciones reales, mocks y pendientes.

## Conectar a GitHub

Ver [GITHUB_SETUP.md](./GITHUB_SETUP.md).
Para trabajar con GitHub + cPanel y revisar `app.touch.com.co` en vivo, ver [LIVE_DEPLOY_WORKFLOW.md](./LIVE_DEPLOY_WORKFLOW.md).

Resumen rapido:

```bash
git init
git add .
git commit -m "Initial Flowpost Studio MVP"
git remote add origin https://github.com/TU_USUARIO/flowpost-studio-mvp.git
git branch -M main
git push -u origin main
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

El build estatico queda en `dist/`.

## Smoke test

```bash
npm run smoke
```

Valida que el backend local responda y que las rutas criticas existan.

## Produccion y Supabase

```bash
npm run production:check
npm run live:check
npm run supabase:migrate
npm run deploy:package
```

- `production:check` valida variables esperadas para `https://app.touch.com.co`.
- `live:check` consulta endpoints reales de `https://app.touch.com.co`.
- `supabase:migrate` migra `data/db.json` a Supabase cuando ya existan `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY`.
- `supabase:check` valida que `supabase/schema.sql` ya fue ejecutado antes de migrar o activar `DATA_PROVIDER=supabase`.
- `supabase/soft-delete.sql` agrega papelera de recuperacion por 30 dias para empresas y perfiles si el esquema ya existia.
- `deploy:package` crea una carpeta limpia para subir a cPanel.
- Endpoint de readiness: `/api/production-readiness`.

Ver [CPANEL_DEPLOYMENT.md](./CPANEL_DEPLOYMENT.md) para subir la app a `app.touch.com.co`.
Si el dominio abre pero `/api/health` da 404, revisa [CPANEL_NODE_SETUP.md](./CPANEL_NODE_SETUP.md).

## Despliegue

Para conectar APIs reales, usar el staging publico con HTTPS `https://app.touch.com.co`. Ver [DEPLOYMENT_SERVER.md](./DEPLOYMENT_SERVER.md).

El modo local sigue siendo util para desarrollar rapido, pero los OAuth de Google, Meta, TikTok y Stripe deben apuntar a un dominio publico usando `APP_PUBLIC_URL`.

### Namecheap Nebula como sitio estatico

1. Ejecutar `npm run build`.
2. Subir el contenido de `dist/`.
3. Usar esta opcion solo para demo estatica: el backend JSON local y `/api/*` no viven en `dist/`.
4. Para comercializar, conviene mover datos/API a un backend real o Supabase antes de vender.

### Vercel

1. Subir el proyecto a GitHub.
2. Importar el repo en Vercel.
3. Para version estatica, usar `npm run build` y publicar `dist`.
4. Para version con API persistente, migrar `server.js` a funciones/serverless o usar un backend externo.

## Variables de entorno

Copiar `.env.example` a `.env` cuando se conecten servicios reales.

```bash
cp .env.example .env
```

Para guiones con IA desde backend:

- `OPENAI_API_KEY` + `OPENAI_MODEL` activa ChatGPT/OpenAI.
- `GEMINI_API_KEY` + `GEMINI_MODEL` activa Gemini como respaldo o como proveedor principal.
- `AI_PROVIDER=openai` o `AI_PROVIDER=gemini` define que proveedor se intenta primero.
- Sin llaves, `/api/ai/script` responde en modo mock editable para no romper calendario.

## Supabase

Supabase queda como la base de datos recomendada para produccion. Ver [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) y ejecutar [supabase/schema.sql](./supabase/schema.sql) cuando ya tengas creado el proyecto en Supabase.

Para esta etapa el MVP sigue usando `localStorage` al abrir `index.html` directo y `data/db.json` al correr `npm run dev`. La migracion a Supabase debe hacerse desde el backend para no exponer `SUPABASE_SERVICE_ROLE_KEY` ni tokens de redes sociales en el navegador.

El backend ya tiene adaptadores de datos:

- `DATA_PROVIDER=local`: usa `data/db.json`.
- `DATA_PROVIDER=supabase`: usa Supabase REST desde backend con `SUPABASE_SERVICE_ROLE_KEY`.

Archivos clave:

- `lib/data-store.js`
- `lib/local-store.js`
- `lib/supabase-store.js`

Para pruebas internas puedes activar el perfil `Touch Studio` como super admin con `GET /api/admin/seed-touch?token=TU_ADMIN_MIGRATION_TOKEN`. Ese endpoint solo responde si existe `ADMIN_MIGRATION_TOKEN` en variables de entorno y desbloquea todos los modulos para validar la plataforma completa.

La base multiusuario ya esta preparada con `company_members`: cada empresa puede tener propietario, administrador, editor, aprobador, cliente invitado o facturacion. En esta fase se registran permisos y accesos; el siguiente paso es conectar Supabase Auth para enviar invitaciones reales por email y aplicar RLS por usuario autenticado.

## APIs de redes y Drive

El paso a paso principal esta en [API_STEP_BY_STEP.md](./API_STEP_BY_STEP.md).
El plan resumido esta en [API_CONNECT_PLAN.md](./API_CONNECT_PLAN.md):

1. Meta para Instagram/Facebook.
2. Google Drive para seleccionar videos.
3. TikTok Content Posting API.
4. LinkedIn/YouTube en una fase posterior.

Para TikTok, revisar [TIKTOK_REVIEW_READINESS.md](./TIKTOK_REVIEW_READINESS.md). Ya existen paginas legales base en `/legal/privacy.html` y `/legal/terms.html`, necesarias para una app comercial revisable.

Google Drive ya tiene intercambio OAuth preparado en backend:

- `GET /api/oauth/google/start`
- `GET /api/oauth/google/callback`
- `GET /api/oauth/meta/start?mode=json`
- `GET /api/oauth/tiktok/start?mode=json`
- `GET /api/media/files?provider=Google%20Drive`

Cuando `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` estan configurados, el callback intercambia el `code`, guarda tokens en backend y luego `/api/media/files` puede listar videos con Drive API. En `DATA_PROVIDER=local`, los tokens quedan en `data/db.json`; en produccion deben vivir en Supabase con service role y cifrado real.

## Login social y pagos

La pagina publica y la pantalla de login ya existen:

- `landing.html`
- `login.html`

El backend tiene rutas preparadas:

- `GET /api/auth/google/start`
- `GET /api/auth/facebook/start`
- `GET /api/billing/checkout?plan=pro`
- `GET /api/billing/checkout?plan=agency`

Ver [AUTH_BILLING_PLAN.md](./AUTH_BILLING_PLAN.md) para conectar Google Login, Facebook Login y Stripe Checkout sin exponer secretos en el frontend.

Stripe Checkout ya crea sesiones reales desde backend si existen `STRIPE_SECRET_KEY`, `STRIPE_PRICE_PRO` y `STRIPE_PRICE_AGENCY`.
El webhook de Stripe esta en `/api/billing/webhook` y requiere `STRIPE_WEBHOOK_SECRET`.

Mientras no haya credenciales, `login.js` crea una sesion MVP en `localStorage` para probar el recorrido comercial completo: landing, seleccion de plan, login y dashboard.

El dashboard ya muestra `Cuenta y plan` dentro de Cuentas. En modo demo puedes alternar Starter, Pro y Agencia para validar limites:

- Starter: 1 empresa y 20 publicaciones.
- Pro: 5 empresas y 160 publicaciones.
- Agencia: empresas y publicaciones ilimitadas.

Con `npm run dev`, la cuenta MVP tambien puede sincronizarse por backend en:

- `GET /api/session`
- `PUT /api/session`
- `DELETE /api/session`

En modo `DATA_PROVIDER=local` se guarda dentro de `data/db.json`. En modo `DATA_PROVIDER=supabase` usa las tablas `app_profiles` y `subscriptions`.

## API local

- `GET /api/health`
- `GET /api/diagnostics`
- `GET /api/production-readiness`
- `GET /api/session`
- `PUT /api/session`
- `GET /api/state`
- `PUT /api/state`
- `GET /api/companies`
- `POST /api/companies`
- `GET /api/companies/:id`
- `PATCH /api/companies/:id`
- `DELETE /api/companies/:id`
- `PATCH /api/companies/:id/media-source`
- `POST /api/companies/:id/videos`
- `GET /api/publications`
- `GET /api/publications?companyId=empresa-id`
- `POST /api/publications`
- `GET /api/publications/:id`
- `PATCH /api/publications/:id`
- `DELETE /api/publications/:id`
- `POST /api/posts`
- `POST /api/ai/copy`
- `POST /api/ai/script`
- `POST /api/publish/preflight`
- `GET /api/media/files?provider=Google%20Drive`
- `GET /api/auth/google/start`
- `GET /api/auth/facebook/start`
- `GET /api/billing/checkout?plan=pro`
- `GET /api/billing/webhook`
- `POST /api/billing/webhook`
