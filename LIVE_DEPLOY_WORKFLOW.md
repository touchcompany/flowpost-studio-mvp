# Flujo recomendado: GitHub + cPanel + pruebas en vivo

Dominio objetivo:

```text
https://app.touch.com.co
```

## Recomendacion clara

Usa este orden:

1. GitHub para guardar historial y trabajar seguro.
2. cPanel Node.js App Manager como staging publico.
3. Supabase como base real.
4. Variables del servidor en cPanel, nunca en GitHub.
5. Verificacion online con `npm run live:check`.

## 1. GitHub sin subir cosas de más

Tu carpeta del proyecto es:

```bash
/Users/jw/Documents/New project/social-publisher-mvp
```

El comando `git status` detecta archivos de la carpeta padre `New project`, por eso hay que tener cuidado.

Opcion segura:

```bash
cd "/Users/jw/Documents/New project/social-publisher-mvp"
git init
git add .
git commit -m "Initial Flowpost Studio app"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/flowpost-studio-mvp.git
git push -u origin main
```

Antes de hacer `git add .`, revisa:

```bash
git status --short
```

Solo deberian aparecer archivos dentro de `social-publisher-mvp`.

## 2. Que no debe ir a GitHub

No subir:

- `.env`
- credenciales de cPanel
- tokens WHM
- tokens eNom
- service role key de Supabase
- claves de Stripe
- tokens OAuth

Si ya compartiste alguna clave por chat, rotala antes de activar producción.

## 3. Subir a cPanel para revisar en tiempo real

Primero crea el paquete:

```bash
npm run deploy:package
```

Sube esta carpeta completa:

```text
deploy/flowpost-studio-server
```

En cPanel:

- Tipo: Node.js App
- Application root: carpeta subida
- Startup file: `server.js`
- URL: `https://app.touch.com.co`
- Ejecutar NPM install
- Reiniciar app

Variables mínimas:

```bash
NODE_ENV=production
HOST=0.0.0.0
PORT=4176
APP_PUBLIC_URL=https://app.touch.com.co
DATA_PROVIDER=supabase
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=media-assets
```

## 4. Revisar en tiempo real

Cuando subas cambios:

1. Local:

```bash
npm run check
npm run build
npm run deploy:package
```

2. Subir la carpeta `deploy/flowpost-studio-server` al servidor.
3. En cPanel, reiniciar la Node.js App.
4. Verificar:

```bash
npm run live:check
```

O con URL personalizada:

```bash
npm run live:check -- https://app.touch.com.co
```

También puedes abrir:

```text
https://app.touch.com.co/api/health
https://app.touch.com.co/api/diagnostics
https://app.touch.com.co/api/production-readiness
https://app.touch.com.co/api/services/provisioning/status
```

Tambien revisa:

```text
https://app.touch.com.co/api/version
https://app.touch.com.co/api/system/status
https://app.touch.com.co/api/auth/status
```

`/api/version` debe mostrar el commit mas reciente de GitHub. Si no aparece el ultimo commit, cPanel todavia esta ejecutando una version anterior.

## 4.1 Checklist para dejar Google/Facebook funcionando

Cuando estes en cPanel, haz esto en este orden:

1. En **Git Version Control**, entra al repo de `app.touch.com.co`.
2. Clic en **Update from Remote**.
3. Verifica que el commit coincida con el ultimo de GitHub.
4. En **Node.js App**, clic en **Restart**.
5. Abre `https://app.touch.com.co/api/version`.
6. Si `/api/version` no existe o muestra un commit viejo, vuelve a reiniciar Node.js o revisa que el Application Root sea `/home/touchestudio/app.touch.com.co`.
7. En variables de entorno de Node.js, agrega:

```bash
NODE_ENV=production
HOST=0.0.0.0
APP_PUBLIC_URL=https://app.touch.com.co
DATA_PROVIDER=supabase
OAUTH_STATE_SECRET=un-texto-largo-secreto
AUTH_GOOGLE_CLIENT_ID=
AUTH_GOOGLE_CLIENT_SECRET=
AUTH_GOOGLE_REDIRECT_URI=https://app.touch.com.co/api/auth/google/callback
AUTH_FACEBOOK_APP_ID=
AUTH_FACEBOOK_APP_SECRET=
AUTH_FACEBOOK_REDIRECT_URI=https://app.touch.com.co/api/auth/facebook/callback
```

8. En Google Cloud Console, el OAuth Client debe ser **Web application** y debe tener este redirect autorizado:

```text
https://app.touch.com.co/api/auth/google/callback
```

9. En Meta Developers, Facebook Login debe tener este valid OAuth redirect URI:

```text
https://app.touch.com.co/api/auth/facebook/callback
```

10. Reinicia Node.js otra vez.
11. Abre `https://app.touch.com.co/api/auth/status`.
12. Google y Facebook deben mostrar `ready:true`.

Si Google/Facebook siguen en `ready:false`, no es problema visual de la app: falta alguna variable en cPanel o el redirect no coincide exactamente con el configurado en Google/Meta.

## 5. Para que GitHub actualice cPanel automáticamente

Hay dos caminos:

### Opcion A: manual segura por ahora

Subir paquete desde `deploy/flowpost-studio-server` y reiniciar app.

Es la mejor mientras estamos conectando APIs reales.

### Opcion B: Git en cPanel

Si tu cPanel tiene **Git Version Control**:

1. Crear repo en GitHub.
2. Conectar repo desde cPanel.
3. Pull desde cPanel cuando haya cambios.
4. Ejecutar `npm install` si cambian dependencias.
5. Reiniciar Node.js App.

### Opcion C: GitHub Actions por SFTP/SSH

Más adelante se puede crear un workflow que:

1. Ejecute `npm run check`.
2. Ejecute `npm run build`.
3. Empaquete.
4. Suba por SFTP/SSH.
5. Reinicie la app si el hosting lo permite.

No lo recomiendo hasta tener claro el método de acceso seguro al servidor.

## 6. Orden real para conectar APIs

1. Subir app a `https://app.touch.com.co`.
2. Activar Supabase.
3. Activar login real.
4. Activar Stripe.
5. Activar Google Drive.
6. Activar cPanel/WHM y eNom en modo prueba.
7. Activar Meta/Instagram/Facebook.
8. Preparar TikTok review.

## 7. Señal de que ya podemos probar real

La app estará lista para pruebas reales cuando:

- `https://app.touch.com.co/api/health` responda `ok:true`.
- `production-readiness` marque lo principal como listo.
- Supabase esté activo.
- Stripe esté en test mode.
- cPanel/eNom estén en test/sandbox.
- OAuth de Google/Meta esté configurado con redirect HTTPS.
