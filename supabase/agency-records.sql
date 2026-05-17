-- Ejecutar si ya habias creado la base antes de agregar operacion de agencia.
-- Guarda clientes, servicios, ordenes, facturas, actividad y borrador de cobro.

alter table public.app_profiles add column if not exists role text not null default 'business_owner';
alter table public.app_profiles add column if not exists role_label text not null default '';
alter table public.app_profiles add column if not exists company_access text[] not null default array[]::text[];
alter table public.app_profiles add column if not exists metadata jsonb not null default '{}'::jsonb;

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
