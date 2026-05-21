-- Flowpost Studio: migracion de produccion para esquema online.
-- Esta migracion mantiene sincronizado GitHub -> Supabase cuando el proyecto usa migrations.

alter table public.companies
  add column if not exists deleted_at timestamptz,
  add column if not exists deletion_expires_at timestamptz,
  add column if not exists deleted_by text;

alter table public.app_profiles
  add column if not exists deleted_at timestamptz,
  add column if not exists deletion_expires_at timestamptz,
  add column if not exists deleted_by text;

create index if not exists companies_deleted_idx on public.companies (deleted_at, deletion_expires_at);
create index if not exists app_profiles_deleted_idx on public.app_profiles (deleted_at, deletion_expires_at);

alter table public.app_profiles add column if not exists role text not null default 'business_owner';
alter table public.app_profiles add column if not exists role_label text not null default '';
alter table public.app_profiles add column if not exists company_access text[] not null default array[]::text[];
alter table public.app_profiles add column if not exists metadata jsonb not null default '{}'::jsonb;

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

create table if not exists public.app_records (
  id text primary key,
  record_type text not null,
  company_id text,
  agency_id text,
  payload jsonb not null default '{}'::jsonb,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists app_records_type_idx on public.app_records (record_type, updated_at desc);
create index if not exists app_records_company_idx on public.app_records (company_id, record_type);
create index if not exists app_records_agency_idx on public.app_records (agency_id, record_type);
alter table public.app_records enable row level security;
