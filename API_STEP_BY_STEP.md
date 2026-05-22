# APIs: paso a paso de conexion

Esta guia deja el orden recomendado para conectar APIs sin romper el MVP actual.

Regla principal: los secretos, tokens OAuth y llamadas de publicacion deben vivir en backend. El frontend solo debe iniciar conexiones, mostrar estados, pedir confirmacion y enviar instrucciones al backend.

## Orden recomendado

1. Supabase.
2. Meta OAuth.
3. Instagram Publishing.
4. Facebook Pages Publishing.
5. Google Drive Picker.
6. TikTok OAuth + Content Posting API.
7. YouTube.
8. LinkedIn.
9. cPanel/WHM para hosting.
10. eNom para dominios.

## Variables base

```bash
APP_PUBLIC_URL=https://tu-dominio.com
DATA_PROVIDER=supabase
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=media-assets
```

## 1. Supabase

Objetivo: guardar empresas, publicaciones, biblioteca, cuentas conectadas y trabajos.

Pasos:

1. Crear proyecto en Supabase.
2. Abrir SQL Editor.
3. Ejecutar `supabase/schema.sql`.
4. Crear bucket privado `media-assets`.
5. Configurar variables `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`.
6. Probar backend con `DATA_PROVIDER=supabase`.

Endpoints internos esperados:

- `GET /api/state`
- `PUT /api/state`

Tablas principales:

- `companies`
- `social_accounts`
- `media_sources`
- `media_assets`
- `posts`
- `post_jobs`

## 2. Meta OAuth para Instagram/Facebook

Objetivo: conectar cuentas Meta y obtener paginas/cuentas de Instagram autorizadas.

Variables:

```bash
META_APP_ID=
META_APP_SECRET=
META_REDIRECT_URI=https://tu-dominio.com/api/oauth/meta/callback
META_GRAPH_VERSION=v25.0
```

Pasos en Meta Developers:

1. Crear app tipo Business.
2. Configurar dominio publico HTTPS.
3. Agregar URL de Politica de privacidad: `https://app.touch.com.co/legal/privacy.html`.
4. Agregar URL de Terminos: `https://app.touch.com.co/legal/terms.html`.
5. Agregar URL de eliminacion de datos si Meta la solicita: `https://app.touch.com.co/legal/data-deletion.html`.
6. Configurar OAuth redirect URI exacto para login: `https://app.touch.com.co/api/auth/facebook/callback`.
7. Configurar OAuth redirect URI exacto para conectar cuentas Meta: `https://app.touch.com.co/api/oauth/meta/callback`.
8. Pedir permisos necesarios para paginas e Instagram.
7. Agregar usuarios de prueba antes de enviar a revision.

Permisos esperados:

- `pages_show_list`
- `pages_read_engagement`
- `pages_manage_posts`
- `instagram_basic`
- `instagram_content_publish`

Endpoints ya preparados:

- `GET /api/oauth/meta/start`
- `GET /api/oauth/meta/callback`

Siguiente implementacion:

1. Intercambiar `code` por access token.
2. Obtener paginas del usuario.
3. Obtener cuenta Instagram vinculada a cada pagina.
4. Guardar cuenta en `social_accounts`.
5. Mostrar estado `Conectada` en Cuentas.

## 3. Instagram Publishing

Objetivo: publicar reels/videos, imagenes o carruseles en Instagram profesional.

Requisitos:

- Cuenta Instagram Business o Creator.
- Pagina Facebook vinculada.
- Permisos Meta aprobados.
- Media accesible desde URL publica o almacenamiento propio.

Flujo tecnico:

1. Usuario crea publicacion en Flowpost.
2. Backend valida cuenta conectada.
3. Backend crea media container en Instagram.
4. Backend espera/consulta estado del container.
5. Backend publica el container.
6. Guardar resultado en `post_jobs`.

Endpoints sugeridos:

- `POST /api/instagram/media-container`
- `GET /api/instagram/media-container/:id/status`
- `POST /api/instagram/publish`

Campos necesarios:

- `instagram_business_account_id`
- `access_token`
- `caption`
- `media_url`
- `content_type`

Notas:

- No publicar desde frontend.
- No guardar tokens en `localStorage`.
- Para carruseles, crear contenedores hijos y luego contenedor padre.

## 4. Facebook Pages Publishing

Objetivo: publicar posts, imagenes o videos en paginas de Facebook.

Requisitos:

- Pagina de Facebook.
- Usuario con permiso sobre esa pagina.
- Page access token.
- Permiso `pages_manage_posts`.

Flujo tecnico:

1. OAuth Meta.
2. Obtener paginas.
3. Usuario selecciona pagina para la empresa.
4. Guardar `page_id` y token/credencial segura.
5. Backend publica en Page feed, fotos o videos segun tipo.

Endpoints sugeridos:

- `POST /api/facebook/pages/:pageId/feed`
- `POST /api/facebook/pages/:pageId/photos`
- `POST /api/facebook/pages/:pageId/videos`

## 5. Google Drive

Objetivo: seleccionar videos desde Drive sin subir uno por uno.

Variables:

```bash
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=https://tu-dominio.com/api/oauth/google/callback
GOOGLE_DRIVE_SCOPES=openid email profile https://www.googleapis.com/auth/drive.file
GOOGLE_API_KEY=
GOOGLE_APP_ID=
```

Pasos en Google Cloud:

1. Crear proyecto.
2. Configurar OAuth consent screen.
3. Crear OAuth Client ID tipo Web application.
4. Agregar dominio autorizado.
5. Agregar redirect URI.
6. Habilitar Google Picker API.
7. Habilitar Google Drive API si se van a leer metadatos/descargar archivos.
8. Crear API key restringida para Picker.

Scopes recomendados:

- `https://www.googleapis.com/auth/drive.file` para acceso limitado a archivos que el usuario seleccione.
- Evitar `drive` completo salvo que sea estrictamente necesario.

Flujo tecnico:

1. Boton `Conectar Drive`.
2. OAuth Google.
3. Abrir Google Picker.
4. Usuario elige carpeta o videos.
5. Guardar referencias en `media_sources` y `media_assets`.
6. Al publicar, backend descarga/copia archivo o usa URL autorizada segun estrategia.

Endpoints sugeridos:

- `GET /api/oauth/google/start`
- `GET /api/oauth/google/callback`
- `POST /api/google-drive/assets`
- `GET /api/google-drive/folders/:id/files`

Estado actual del MVP:

- `/api/oauth/google/start` ya genera URL OAuth real cuando existen credenciales.
- `/api/oauth/google/start?mode=json` devuelve `authUrl` para abrir OAuth desde la app.
- `/api/oauth/google/callback` valida `state` y deja preparado el intercambio de `code`.
- Falta implementar intercambio de token y Google Picker real.

## 6. TikTok Content Posting API

Objetivo: publicar videos o fotos en TikTok con aprobacion oficial.

Variables:

```bash
TIKTOK_CLIENT_KEY=
TIKTOK_CLIENT_SECRET=
TIKTOK_REDIRECT_URI=https://tu-dominio.com/api/oauth/tiktok/callback
TIKTOK_SCOPES=user.info.basic,video.publish
```

Pasos en TikTok Developers:

1. Crear app.
2. Agregar dominio publico HTTPS.
3. Agregar privacidad y terminos.
4. Agregar producto Content Posting API.
5. Habilitar Direct Post configuration.
6. Solicitar aprobacion de `video.publish`.
7. Preparar video demo de uso.
8. Completar revision/audit cuando TikTok lo solicite.

Endpoints ya preparados:

- `GET /api/oauth/tiktok/start`
- `GET /api/oauth/tiktok/callback`

Siguiente implementacion:

1. Intercambiar `code` por access token.
2. Guardar token y `open_id`.
3. Crear `GET /api/tiktok/creator-info`.
4. Mostrar modal final de TikTok usando opciones reales de creator info.
5. Crear `POST /api/tiktok/publish`.
6. Guardar `publish_id` en `post_jobs`.

UI obligatoria antes de publicar:

- Cuenta conectada.
- Vista previa del video.
- Caption editable.
- Selector de privacidad devuelto por TikTok.
- Toggles permitidos para comentarios, dueto y stitch.
- Confirmacion explicita antes de enviar.

## 7. YouTube

Objetivo: publicar Shorts o videos a un canal.

Variables:

```bash
YOUTUBE_CLIENT_ID=
YOUTUBE_CLIENT_SECRET=
YOUTUBE_REDIRECT_URI=https://tu-dominio.com/api/oauth/youtube/callback
```

Pasos:

1. Crear proyecto en Google Cloud.
2. Configurar OAuth consent.
3. Habilitar YouTube Data API.
4. Solicitar scope de subida de videos.
5. Guardar canal autorizado por empresa.

Endpoints sugeridos:

- `GET /api/oauth/youtube/start`
- `GET /api/oauth/youtube/callback`
- `POST /api/youtube/upload`

## 8. LinkedIn

Objetivo: publicar en perfil o pagina de empresa.

Variables:

```bash
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
LINKEDIN_REDIRECT_URI=https://tu-dominio.com/api/oauth/linkedin/callback
```

Pasos:

1. Crear app en LinkedIn Developers.
2. Asociar pagina/organizacion si se publicara como empresa.
3. Solicitar productos/permisos de contenido.
4. Implementar OAuth.
5. Guardar organizacion autorizada.

Endpoints sugeridos:

- `GET /api/oauth/linkedin/start`
- `GET /api/oauth/linkedin/callback`
- `POST /api/linkedin/publish`

## 9. cPanel/WHM para hosting

Objetivo: cuando un cliente compra hosting o pagina web, crear la cuenta de hosting desde backend.

Variables:

```bash
CPANEL_WHM_HOST=
CPANEL_WHM_PORT=2087
CPANEL_WHM_USERNAME=
CPANEL_WHM_TOKEN=
CPANEL_DEFAULT_PLAN=
CPANEL_DEFAULT_CONTACT_EMAIL=
CPANEL_FEATURELIST=
ENABLE_REAL_PROVISIONING=false
```

Pasos:

1. Crear un API Token en WHM con permisos para Account Functions.
2. Crear paquetes de hosting en WHM y copiar el nombre exacto en `CPANEL_DEFAULT_PLAN`.
3. Configurar `CPANEL_WHM_HOST` sin `https://`, por ejemplo `host43.registrar-servers.com`.
4. Guardar token solo en backend o variables de cPanel Node.js.
5. Probar `GET /api/services/provisioning/status`.
6. Comprar un servicio `hosting` o `website` desde Tienda con dominio y email tecnico.
7. La app llamara `POST /api/services/provision` en modo seguro si `ENABLE_REAL_PROVISIONING=false`.
8. Cuando todo este probado, activar `ENABLE_REAL_PROVISIONING=true` para ejecutar WHM API `createacct`.

Notas:

- Nunca exponer token WHM en frontend.
- El dominio debe ser valido y el username se genera automaticamente.
- Si faltan variables, la orden queda como `Conector pendiente`.

## 10. eNom para dominios

Objetivo: cuando un cliente compra un dominio, enviar la compra a eNom desde backend.

Variables:

```bash
ENOM_ENV=test
ENOM_UID=
ENOM_TOKEN=
ENOM_DEFAULT_YEARS=1
ENABLE_REAL_PROVISIONING=false
```

Pasos:

1. Crear o activar cuenta reseller eNom.
2. Activar acceso API y usar primero ambiente de prueba.
3. Whitelistear la IP publica del servidor si eNom lo requiere.
4. Crear token API.
5. Configurar `ENOM_ENV=test` hasta validar todo.
6. Comprar un servicio `Dominio anual` desde Tienda con el dominio previamente verificado.
7. La app llamara `POST /api/services/provision` en modo seguro si `ENABLE_REAL_PROVISIONING=false`.
8. Cuando todo este probado, activar `ENABLE_REAL_PROVISIONING=true` para ejecutar comando eNom `Purchase`.

Notas:

- Usar `ENOM_ENV=live` solo despues de pruebas controladas.
- En produccion conviene agregar validacion previa de disponibilidad, datos de titular y confirmacion final antes de compra irreversible.
- `ENOM_UID` es el usuario/API login de eNom; el token debe vivir solo en variables del servidor.

## Checklist antes de produccion

- Dominio HTTPS.
- `.env` configurado en cPanel.
- Supabase activo.
- Privacy y Terms publicos.
- Auth de usuarios.
- Tokens guardados solo en backend/Supabase.
- Confirmacion antes de publicar.
- Logs de errores por `post_jobs`.
- Boton de desconectar cuenta.
- Exportacion/eliminacion de datos del usuario.

## Fuentes oficiales

- Meta Instagram Content Publishing: https://developers.facebook.com/docs/instagram-api/guides/content-publishing/
- Meta Facebook Login: https://developers.facebook.com/docs/facebook-login/
- Google Picker API: https://developers.google.com/drive/picker/guides/overview
- Google Drive scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
- TikTok Content Posting API: https://developers.tiktok.com/doc/content-posting-api-get-started/
- TikTok Direct Post: https://developers.tiktok.com/doc/content-posting-api-reference-direct-post
- cPanel WHM API createacct: https://api.docs.cpanel.net/dev/_dev.cpanel.openapi/accounts/createaccount
- eNom API access: https://support.enom.com/en/support/solutions/articles/201000065295
