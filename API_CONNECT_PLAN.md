# Plan para conectar APIs

Orden recomendado para Flowpost Studio:

La guia operativa completa esta en [API_STEP_BY_STEP.md](./API_STEP_BY_STEP.md).

## 1. Meta: Instagram + Facebook

Primero conviene conectar Meta porque Instagram y Facebook comparten gran parte del flujo.

Requisitos:

- Cuenta de Meta Developers.
- App de tipo Business.
- Instagram profesional: Business o Creator.
- Pagina de Facebook vinculada al Instagram.
- OAuth en backend.
- Guardar tokens en Supabase, nunca en frontend.

Variables:

```bash
META_APP_ID=
META_APP_SECRET=
META_REDIRECT_URI=https://tu-dominio.com/api/oauth/meta/callback
APP_PUBLIC_URL=https://tu-dominio.com
```

Flujo tecnico:

1. Boton `Preparar conexion` abre `/api/oauth/meta/start`.
2. Meta redirige a `/api/oauth/meta/callback`.
3. Backend intercambia `code` por token.
4. Backend obtiene paginas y cuentas de Instagram vinculadas.
5. Se guarda la cuenta en `social_accounts`.
6. Para publicar, el backend crea contenedor y luego publica.

## 2. Google Drive

Drive debe conectarse para seleccionar videos sin subirlos manualmente.

Variables:

```bash
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=https://tu-dominio.com/api/oauth/google/callback
```

Flujo:

1. OAuth con Google.
2. Abrir Google Picker o selector propio.
3. Guardar carpeta por empresa en `media_sources`.
4. Guardar videos elegidos en `media_assets`.

## 3. TikTok

TikTok requiere mas revision, por eso va despues de Meta y Drive.

La preparacion especifica de revision esta en [TIKTOK_REVIEW_READINESS.md](./TIKTOK_REVIEW_READINESS.md).

Variables:

```bash
TIKTOK_CLIENT_KEY=
TIKTOK_CLIENT_SECRET=
TIKTOK_REDIRECT_URI=https://tu-dominio.com/api/oauth/tiktok/callback
```

Notas:

- La publicacion directa usa TikTok Content Posting API.
- Se necesita el producto Content Posting en la app.
- Para publicar videos se requiere autorizacion del usuario y scope `video.publish`.
- Si la app no esta auditada, TikTok puede limitar visibilidad del contenido.

## 4. Supabase

Supabase guardara:

- Empresas.
- Cuentas conectadas.
- Tokens cifrados o referencias seguras.
- Publicaciones.
- Trabajos por plataforma.
- Biblioteca de medios.

No exponer secretos ni tokens en `app.js`.
