# Supabase para Flowpost Studio

Esta app ya esta pensada para trabajar online con GitHub, cPanel Node y Supabase. GitHub versiona el codigo y los archivos SQL; Supabase es la base real donde se ejecutan esas migraciones.

1. cPanel sirve la app y el backend Node.
2. Supabase guarda empresas, publicaciones, biblioteca, cuentas y usuarios.
3. Supabase Storage o Cloudflare R2 guarda portadas y archivos pesados.
4. Las APIs de redes sociales se conectan desde backend, nunca desde el frontend.

## Crear proyecto

1. Crear un proyecto en Supabase.
2. Ir a SQL Editor.
3. Ejecutar el contenido completo de `supabase/schema.sql` desde GitHub.
4. Crear un bucket privado llamado `media-assets` si vas a guardar portadas o archivos importados.

Si ya habias ejecutado el esquema antes de agregar papelera/recuperacion, ejecuta tambien:

Ejecuta el contenido completo de `supabase/soft-delete.sql` en Supabase SQL Editor. Ese archivo esta en GitHub, dentro de la carpeta `supabase`.

Si tu base ya existia antes de agregar prompts, invitaciones o operacion de agencia, ejecuta tambien en este orden:

1. `supabase/prompt-templates.sql`
2. `supabase/company-invitations.sql`
3. `supabase/agency-records.sql`

Despues de actualizar cPanel desde GitHub, puedes verificar el estado real en:

```txt
https://app.touch.com.co/api/supabase/check
https://app.touch.com.co/api/production-readiness
```

Si `schema.ok` sale `false`, la respuesta indica que archivo SQL falta ejecutar.

## Variables de entorno

En cPanel Node.js App Manager:

```bash
DATA_PROVIDER=supabase
PORT=4176
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=media-assets
OPENAI_API_KEY=
```

El adaptador real esta en `lib/supabase-store.js`. Antes de vender la app, `DATA_PROVIDER` debe estar en `supabase`, no en `local`.

## Migrar datos desde el JSON local

Cuando el esquema ya exista en Supabase:

```bash
npm run supabase:check
npm run supabase:migrate
```

`supabase:check` confirma que las tablas y columnas clave existen. `supabase:migrate` lee `data/db.json` y guarda empresas, fuentes, cuentas, biblioteca, publicaciones, trabajos y sesion MVP en Supabase. La operacion comercial de agencia queda en `app_records`: clientes, servicios, ordenes, facturas, actividad y borrador de cobro.

Para revisar si el entorno de `app.touch.com.co` esta listo:

```bash
npm run production:check
```

## Seguridad

- `SUPABASE_ANON_KEY` puede usarse en frontend solo para operaciones permitidas por RLS.
- `SUPABASE_SERVICE_ROLE_KEY` solo debe vivir en backend/cPanel.
- Los tokens de Instagram, Facebook, TikTok, YouTube o LinkedIn no deben guardarse sin cifrado.
- El frontend no debe publicar directamente en redes sociales.
- Las empresas y perfiles se envian primero a papelera por 30 dias antes de borrarse definitivamente.

## Migracion recomendada

1. Mantener la interfaz actual.
2. Crear un adaptador `local` y otro `supabase`.
3. Migrar primero empresas y publicaciones.
4. Migrar biblioteca y fuentes Drive/iCloud.
5. Agregar Auth y miembros por empresa.
6. Activar Storage para portadas.
7. Conectar APIs reales de redes sociales.

## Tablas iniciales

- `companies`
- `company_members`
- `social_accounts`
- `media_sources`
- `media_assets`
- `posts`
- `post_jobs`
- `app_profiles`
- `subscriptions`
- `oauth_connections`
