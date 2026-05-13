# Conectar Flowpost Studio a GitHub

Este proyecto esta dentro de `Documentos/New project/social-publisher-mvp`.

## Opcion recomendada: repo independiente

Desde esta carpeta:

```bash
cd "/Users/jw/Documents/New project/social-publisher-mvp"
git init
git add .
git commit -m "Initial Flowpost Studio MVP"
```

Luego crea un repositorio vacio en GitHub, por ejemplo:

```text
flowpost-studio-mvp
```

Despues conecta el remoto:

```bash
git remote add origin https://github.com/TU_USUARIO/flowpost-studio-mvp.git
git branch -M main
git push -u origin main
```

## Si usas GitHub CLI

```bash
gh repo create flowpost-studio-mvp --private --source=. --remote=origin --push
```

Cambia `--private` por `--public` si quieres que sea publico.

## Importante

- No subas `.env`.
- No subas claves privadas ni tokens.
- `dist/` se puede regenerar con `npm run build`, por eso queda ignorado.
- `data/db.json` es una base local de MVP. Para vender la app, conviene migrarlo a Supabase/Postgres.

## Para desplegar despues

- Vercel: conecta el repositorio de GitHub y usa `npm run build`.
- Namecheap Nebula: sube el contenido de `dist/` si quieres demo estatica.
- Para app comercial con usuarios reales: usa backend persistente o Supabase antes de vender.

