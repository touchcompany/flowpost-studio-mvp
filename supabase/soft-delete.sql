-- Flowpost Studio: papelera y recuperacion por 30 dias.
-- Ejecutar una vez si ya corriste supabase/schema.sql antes de esta version.

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
