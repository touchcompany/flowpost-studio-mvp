# Touch Note Agent OS

Touch Note debe sentirse simple para el usuario, pero operado por agentes internos que hacen el trabajo pesado.

## Skills externos para Codex

Para instalar skills externos en Codex necesitas el repo real:

```bash
npx skills add <owner>/<repo>
```

Ejemplo:

```bash
npx skills add openai/skills
```

Si el skill vive en una carpeta especifica del repo, instala esa ruta desde el instalador de skills de Codex. Despues reinicia Codex para que aparezcan.

## Agentes recomendados para la app

1. Agente de biblioteca
   - Sincroniza Drive/iCloud.
   - Detecta videos, referencias y piezas reutilizables.
   - Sugiere que recurso usar en cada publicacion.

2. Agente creativo
   - Crea guiones, carruseles, prompts de imagen y prompts de video.
   - Usa tono de empresa, personajes, referencias y servicios comprados.
   - Guarda resultados por empresa, no mezclados.

3. Agente de publicacion
   - Valida copy, fecha, medio, red social y permisos.
   - Bloquea envio si falta OAuth, video o aprobacion.
   - Ejecuta dry-run antes de publicar.

4. Agente comercial
   - Convierte compras en ordenes de servicio.
   - Crea cuenta de cobro/factura.
   - Genera pasos de entrega y estado para el cliente.

5. Agente de proveedores
   - Revisa cPanel/WHM, eNom, dominios, hosting y correo.
   - Solo super admin puede ejecutar acciones reales.

6. Agente de soporte
   - Responde dudas simples dentro de la plataforma.
   - Guia al usuario segun su plan y permisos.
   - Escala a humano cuando hay pagos, credenciales o errores reales.

## Principio de UX

El usuario no debe ver todos los modulos al mismo tiempo. Debe ver:

- Inicio
- Crear
- Calendario
- Guiones
- Tu perfil

El resto se abre desde el perfil o segun permisos. Super admin ve todo; usuarios normales solo ven lo comprado o habilitado manualmente.

## Automatizaciones reales necesarias

- Login social con Google/Facebook.
- Supabase como fuente unica de datos.
- Biblioteca conectada a Drive.
- OpenAI/Gemini para guiones e imagenes.
- Preflight de publicacion antes de enviar.
- Mercado Pago o PayPal para compras.
- Webhook de pagos que active servicios.
- cPanel/eNom solo desde backend y con aprobacion del super admin.

## Endpoint interno de agentes

La app ya expone un punto central para ejecutar agentes desde UI, cron o futuras colas:

```http
POST /api/agents/run
Content-Type: application/json

{
  "action": "agent-library",
  "companyId": "company-id"
}
```

Acciones actuales:

- `agent-library`: lista videos reales de Google Drive cuando hay OAuth; si falta token, devuelve recursos demo para no romper el flujo.
- `agent-script`: devuelve estado de OpenAI/Gemini y un prompt sugerido por empresa.
- `agent-publish`: ejecuta preflight de publicacion por trabajo, sin enviar todavia.
- `agent-apis`: revisa credenciales OAuth y cuentas conectadas.
- `agent-store`: revisa catalogo, ordenes y servicios vendibles.

Este endpoint es la base para conectar skills externos: cada skill debe terminar llamando una accion de agente o creando una nueva accion en este router, no manipulando datos directo desde frontend.

## Regla de seguridad

Nunca publicar, comprar dominio, crear hosting o cobrar automaticamente sin una confirmacion o estado explicito en el flujo. Primero dry-run, despues accion real.
