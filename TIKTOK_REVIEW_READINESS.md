# TikTok Review Readiness

Objetivo: dejar Flowpost Studio listo para solicitar acceso a TikTok Content Posting API, especialmente `video.publish`.

## Requisitos de producto

- La app debe tener nombre e icono propios, no confundibles con TikTok.
- Debe existir una URL publica funcional.
- Debe tener Politica de privacidad publica: `/legal/privacy.html`.
- Debe tener Terminos de uso publicos: `/legal/terms.html`.
- El flujo debe explicar por que se solicita acceso a TikTok.
- El usuario debe conectar su cuenta por OAuth.
- La app debe mostrar claramente cuando una cuenta esta conectada.
- Antes de publicar, la app debe mostrar una revision final del contenido.

## Requisitos tecnicos para Content Posting API

Segun la documentacion oficial de TikTok:

- La app debe estar registrada en TikTok for Developers.
- Debe agregarse el producto Content Posting API.
- Para Direct Post hay que habilitar Direct Post configuration.
- La app debe estar aprobada para `video.publish`.
- El usuario debe autorizar el scope `video.publish`.
- Los tokens deben gestionarse con cuidado y preferiblemente en servidor.
- Antes de publicar, hay que llamar `creator_info/query`.
- La UI debe usar las opciones reales devueltas por TikTok, como privacidad, comentarios, duetos y stitch.

## UI necesaria antes de publicar en TikTok

Pantalla o modal de "Exportar a TikTok":

- Cuenta TikTok conectada.
- Titulo/caption editable.
- Vista previa del video.
- Selector de privacidad usando `privacy_level_options`.
- Toggle de comentarios si TikTok lo permite.
- Toggle de dueto si TikTok lo permite.
- Toggle de stitch si TikTok lo permite.
- Confirmacion clara del usuario antes de enviar.
- Estado de subida/procesamiento.
- Mensaje de error si TikTok limita o rechaza la publicacion.

## Demo video para revision

Grabar un video corto mostrando:

1. Inicio de sesion en Flowpost Studio.
2. Entrar a Cuentas.
3. Preparar conexion TikTok.
4. OAuth de TikTok.
5. Cuenta TikTok conectada.
6. Crear publicacion con video.
7. Abrir revision final para TikTok.
8. Confirmar publicacion.
9. Ver estado de publicacion/procesamiento.

## Variables requeridas

```bash
APP_PUBLIC_URL=
TIKTOK_CLIENT_KEY=
TIKTOK_CLIENT_SECRET=
TIKTOK_REDIRECT_URI=https://tu-dominio.com/api/oauth/tiktok/callback
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

## Rutas preparadas

- `GET /api/oauth/status`
- `GET /api/oauth/tiktok/start`
- `GET /api/oauth/tiktok/callback`

## Proxima implementacion

1. Intercambiar `code` por access token en backend.
2. Guardar token cifrado o protegido en Supabase.
3. Crear endpoint `/api/tiktok/creator-info`.
4. Crear modal de revision final TikTok.
5. Crear endpoint `/api/tiktok/publish`.
6. Agregar seguimiento de estado con `publish_id`.

## Fuentes oficiales

- https://developers.tiktok.com/doc/app-review-guidelines
- https://developers.tiktok.com/doc/login-kit-manage-user-access-tokens
- https://developers.tiktok.com/doc/content-posting-api-get-started/
- https://developers.tiktok.com/doc/content-posting-api-reference-query-creator-info
- https://developers.tiktok.com/doc/content-posting-api-reference-direct-post
