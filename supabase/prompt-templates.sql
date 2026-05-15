-- Ejecutar si ya habias creado la base antes de agregar biblioteca de prompts.

create table if not exists public.prompt_templates (
  id text primary key default gen_random_uuid()::text,
  company_id text not null references public.companies(id) on delete cascade,
  type text not null default 'script',
  title text not null default '',
  body text not null default '',
  provider text not null default 'auto',
  created_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists prompt_templates_company_idx on public.prompt_templates (company_id, type, created_at desc);

alter table public.prompt_templates enable row level security;
