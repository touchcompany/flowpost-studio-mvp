# QA Checklist

Usa esta lista para comprobar que cada parte funciona de verdad.

## Modo archivo

Abrir `index.html` directo.

- La app carga sin servidor.
- El panel de Cuentas muestra diagnostico.
- Empresas se guardan en `localStorage`.
- Publicaciones aparecen en Calendario.
- Trabajos aparecen en Cola.
- Biblioteca usa Drive mock.
- Exportar/importar respaldo funciona.

Limitacion: no hay backend ni APIs reales en `file://`.

## Modo backend local

```bash
npm run dev
```

Abrir:

```text
http://127.0.0.1:4176/
```

Probar:

- `/api/health`
- `/api/diagnostics`
- `/api/oauth/status`
- `/legal/privacy.html`
- `/legal/terms.html`
- `/legal/data-deletion.html`

## Prueba automatica

```bash
npm run smoke
```

Esto levanta el backend en un puerto de prueba y valida:

- `/api/health`
- `/api/diagnostics`
- `/api/state`
- `/api/oauth/status`
- `/legal/privacy.html`
- `/legal/terms.html`
- `/legal/data-deletion.html`

## Funciones ya reales

- Interfaz principal.
- Empresas.
- Publicaciones.
- Calendario.
- Cola local.
- Biblioteca local/mock.
- Exportar/importar respaldo.
- Backend JSON local.
- Paginas legales.
- Diagnostico.

## Funciones mock o preparadas

- Google Drive Picker real.
- Meta OAuth real.
- TikTok OAuth real.
- Supabase real.
- Publicacion automatica.

## Siguiente criterio de listo

Una funcion se considera real cuando:

- Tiene endpoint backend.
- Guarda datos en Supabase o backend local.
- Muestra estado correcto en diagnostico.
- Tiene manejo de error.
- Tiene prueba manual en esta lista.
