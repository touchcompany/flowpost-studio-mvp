# Despliegue en servidor real

Para conectar APIs reales conviene tener un entorno publico con HTTPS. Local sigue siendo util para desarrollar rapido, pero Google, Meta, TikTok y Stripe necesitan redirect URIs publicos.

## Recomendacion

Usar dos entornos:

- Local: `http://127.0.0.1:4176` para desarrollar rapido.
- Staging publico: `https://app.touch.com.co` para conectar OAuth, Drive, Meta, TikTok y Stripe.

## Variables minimas de servidor

En produccion o staging usa:

```bash
NODE_ENV=production
PORT=4176
HOST=0.0.0.0
APP_PUBLIC_URL=https://app.tudominio.com
DATA_PROVIDER=supabase
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=media-assets
```

`HOST=0.0.0.0` permite que Node escuche conexiones del servidor. En local mantenemos `HOST=127.0.0.1`.

Para este proyecto, usa:

```bash
APP_PUBLIC_URL=https://app.touch.com.co
```

## Redirect URIs para APIs

```text
Google Drive:  https://app.touch.com.co/api/oauth/google/callback
Meta:          https://app.touch.com.co/api/oauth/meta/callback
TikTok:        https://app.touch.com.co/api/oauth/tiktok/callback
YouTube:       https://app.touch.com.co/api/oauth/youtube/callback
LinkedIn:      https://app.touch.com.co/api/oauth/linkedin/callback
Login Google:  https://app.touch.com.co/api/auth/google/callback
Login Facebook:https://app.touch.com.co/api/auth/facebook/callback
```

La app tambien muestra estos valores en `Cuentas > Configuracion tecnica` usando `APP_PUBLIC_URL`.

## cPanel con Node.js App Manager

1. Subir el proyecto completo al servidor, no solo `dist`.
2. Crear una Node.js App desde cPanel.
3. App root: carpeta del proyecto.
4. Startup file: `server.js`.
5. Run NPM Install.
6. Variables:

```bash
NODE_ENV=production
HOST=0.0.0.0
PORT=4176
APP_PUBLIC_URL=https://app.touch.com.co
DATA_PROVIDER=supabase
```

7. Configurar dominio/subdominio con HTTPS.
8. Abrir:

```text
https://app.touch.com.co/api/health
https://app.touch.com.co/api/diagnostics
```

## Archivo de entorno

Usa `.env.production.example` como plantilla para el servidor:

```bash
cp .env.production.example .env
```

En cPanel puedes copiar esas variables al panel de Node.js App Manager en lugar de subir `.env`.

## Verificar produccion antes de conectar APIs

Cuando tengas `.env` configurado:

```bash
npm run production:check
```

Tambien puedes revisar desde el navegador:

```text
https://app.touch.com.co/api/production-readiness
```

En local puedes abrir:

```text
http://127.0.0.1:4176/api/production-readiness
```

## Migrar datos locales a Supabase

1. Crear el proyecto en Supabase.
2. Ejecutar `supabase/schema.sql` en SQL Editor.
3. Configurar `.env` con:

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
DATA_PROVIDER=supabase
```

4. Ejecutar:

```bash
npm run supabase:migrate
```

Este comando toma `data/db.json` y lo sube a Supabase usando el backend, sin exponer la service role key en frontend.

## Que no conviene hacer

- No usar `file://` para pruebas reales.
- No subir solo `dist` si necesitas `/api/*`.
- No guardar tokens reales en frontend.
- No usar `DATA_PROVIDER=local` para clientes reales.

## Orden recomendado para activar APIs

1. Supabase Postgres y Storage.
2. Supabase Auth o login propio con sesiones seguras.
3. Google Drive OAuth y listado real de videos.
4. Meta OAuth para Instagram/Facebook.
5. TikTok app review y Content Posting API.
6. Stripe Checkout y webhooks.

## Stripe Checkout

El endpoint `/api/billing/checkout` crea una sesion de Stripe Checkout en modo `subscription` cuando existen:

```bash
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_PRO=
STRIPE_PRICE_AGENCY=
STRIPE_SUCCESS_URL=https://app.touch.com.co/index.html
STRIPE_CANCEL_URL=https://app.touch.com.co/landing.html#planes
```

Prueba JSON:

```text
https://app.touch.com.co/api/billing/checkout?mode=json&plan=pro&email=cliente@email.com
```

Webhook:

```text
https://app.touch.com.co/api/billing/webhook
```
