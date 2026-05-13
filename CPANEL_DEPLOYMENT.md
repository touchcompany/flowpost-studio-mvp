# Subir Flowpost Studio a app.touch.com.co

Importante: no compartas credenciales de cPanel por chat. Si ya las compartiste, rota la clave antes de conectar APIs reales.

## 1. Crear paquete

```bash
npm run deploy:package
```

El paquete queda en:

```text
deploy/flowpost-studio-server
```

Sube esa carpeta completa al servidor.

## 2. Crear Node.js App en cPanel

En cPanel:

- Application root: carpeta donde subiste `flowpost-studio-server`.
- Startup file: `server.js`.
- Node version: una version moderna disponible en tu hosting.
- Application URL: `https://app.touch.com.co`.

Variables minimas:

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

## 3. Verificar online

Abre:

```text
https://app.touch.com.co/api/health
https://app.touch.com.co/api/diagnostics
https://app.touch.com.co/api/production-readiness
```

O desde tu Mac:

```bash
npm run live:check
```

Cuando `/api/production-readiness` esté en `ok:true`, ya puedes conectar APIs reales.

## 4. Redirect URIs

Usa exactamente:

```text
https://app.touch.com.co/api/oauth/google/callback
https://app.touch.com.co/api/oauth/meta/callback
https://app.touch.com.co/api/oauth/tiktok/callback
https://app.touch.com.co/api/auth/google/callback
https://app.touch.com.co/api/auth/facebook/callback
```

## 5. Orden de conexión

1. Supabase.
2. Google Drive.
3. Meta / Instagram / Facebook.
4. Stripe.
5. TikTok review.
