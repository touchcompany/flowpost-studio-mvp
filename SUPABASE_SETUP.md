# Supabase para Flowpost Studio

Esta app puede seguir funcionando en modo local mientras se prepara Supabase. La ruta recomendada para venderla es:

1. cPanel sirve la app y el backend Node.
2. Supabase guarda empresas, publicaciones, biblioteca, cuentas y usuarios.
3. Supabase Storage o Cloudflare R2 guarda portadas y archivos pesados.
4. Las APIs de redes sociales se conectan desde backend, nunca desde el frontend.

## Crear proyecto

1. Crear un proyecto en Supabase.
2. Ir a SQL Editor.
3. Ejecutar `supabase/schema.sql`.
4. Crear un bucket privado llamado `media-assets` si vas a guardar portadas o archivos importados.

Si ya habias ejecutado el esquema antes de agregar papelera/recuperacion, ejecuta tambien:

```sql
-- contenido de supabase/soft-delete.sql
```

## Variables de entorno

En cPanel Node.js App Manager o en `.env` local:

```bash
DATA_PROVIDER=local
PORT=4176
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=media-assets
OPENAI_API_KEY=
```

Usa `DATA_PROVIDER=local` mientras el MVP sigue con `data/db.json`.

Cuando se implemente el adaptador real:

```bash
DATA_PROVIDER=supabase
```

El adaptador ya esta preparado en `lib/supabase-store.js`. Antes de activar `DATA_PROVIDER=supabase`, ejecuta el SQL y llena las variables `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY`.

## Migrar datos desde el JSON local

Cuando el esquema ya exista en Supabase:

```bash
npm run supabase:check
npm run supabase:migrate
```

`supabase:check` confirma que las tablas existen. `supabase:migrate` lee `data/db.json` y guarda empresas, fuentes, cuentas, biblioteca, publicaciones, trabajos y sesion MVP en Supabase.

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
