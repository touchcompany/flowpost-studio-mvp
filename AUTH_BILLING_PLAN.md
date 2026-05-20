# Login social y pagos

Esta capa deja Flowpost Studio listo para activar cuentas y planes sin romper el MVP actual.

Hoy `login.js` crea una sesion MVP local en `localStorage` para probar el recorrido comercial sin credenciales. Cuando Supabase Auth este activo, esa sesion local se reemplaza por una sesion real del backend.

## Login con Google

1. Crear credenciales OAuth de tipo Web application en Google Cloud.
2. Agregar el redirect URI:

```text
https://TU_DOMINIO.com/api/auth/google/callback
```

3. Configurar variables:

```bash
AUTH_GOOGLE_CLIENT_ID=
AUTH_GOOGLE_CLIENT_SECRET=
AUTH_GOOGLE_REDIRECT_URI=https://TU_DOMINIO.com/api/auth/google/callback
```

4. Probar:

```text
/api/auth/google/start
```

El backend ya intercambia el `code` por tokens, consulta el perfil `openid email profile`, guarda la sesion en el proveedor de datos activo y redirige a `/index.html#dashboard`. La clave secreta nunca se expone en el frontend.

## Login con Facebook

1. Crear o usar una app en Meta for Developers.
2. Activar Facebook Login.
3. Agregar el redirect URI:

```text
https://TU_DOMINIO.com/api/auth/facebook/callback
```

4. Configurar variables:

```bash
AUTH_FACEBOOK_APP_ID=
AUTH_FACEBOOK_APP_SECRET=
AUTH_FACEBOOK_REDIRECT_URI=https://TU_DOMINIO.com/api/auth/facebook/callback
```

5. Probar:

```text
/api/auth/facebook/start
```

El backend ya intercambia el `code` por un token de acceso, consulta `id,name,email`, guarda la sesion y redirige al dashboard. Este login es para crear cuenta en Flowpost Studio. Es distinto de Meta OAuth para publicar en Instagram/Facebook, que usa permisos de paginas e Instagram Business.

## Pagos con Stripe

1. Crear cuenta en Stripe.
2. Crear productos:
   - Flowpost Pro
   - Flowpost Agencia
3. Crear precios recurrentes y copiar sus `price_...`.
4. Configurar variables:

```bash
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_PRO=
STRIPE_PRICE_AGENCY=
STRIPE_SUCCESS_URL=https://TU_DOMINIO.com/index.html
STRIPE_CANCEL_URL=https://TU_DOMINIO.com/landing.html#planes
```

5. Probar:

```text
/api/billing/checkout?plan=pro
/api/billing/checkout?plan=agency
```

El endpoint ya crea Checkout Sessions reales desde backend cuando existen `STRIPE_SECRET_KEY` y el `price_...` del plan. No usa SDK para mantener el proyecto liviano; llama la API oficial de Stripe desde `server.js` y redirige a `session.url`.

Rutas:

```text
/api/billing/checkout?plan=pro
/api/billing/checkout?plan=agency
/api/billing/checkout?mode=json&plan=pro&email=cliente@email.com
```

Si faltan variables, responde JSON con `ready:false` y la lista de pendientes.

## Webhook de Stripe

Configura en Stripe este endpoint:

```text
https://app.touch.com.co/api/billing/webhook
```

Eventos recomendados:

```text
checkout.session.completed
customer.subscription.updated
```

Variable necesaria:

```bash
STRIPE_WEBHOOK_SECRET=whsec_...
```

El backend verifica `Stripe-Signature` usando el body crudo, registra eventos y actualiza la sesion/plan cuando recibe una compra completada.

## Recomendacion de arquitectura

- Supabase Auth para usuarios, login social y sesiones.
- Supabase Postgres para empresas, miembros, planes y permisos.
- Stripe Checkout para pago inicial y suscripciones.
- Webhook de Stripe para actualizar `plan`, `status`, `current_period_end` y limites de uso en Supabase.
