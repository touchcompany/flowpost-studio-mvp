-- Ejecutar si ya habias creado la base antes de agregar invitaciones por empresa.

create table if not exists public.company_invitations (
  id text primary key default gen_random_uuid()::text,
  company_id text not null references public.companies(id) on delete cascade,
  email text not null default '',
  role text not null default 'client_viewer',
  token text not null unique,
  status text not null default 'Pendiente',
  expires_at timestamptz,
  accepted_at timestamptz,
  cancelled_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists company_invitations_company_idx on public.company_invitations (company_id, status, created_at desc);
create index if not exists company_invitations_token_idx on public.company_invitations (token);

alter table public.company_invitations enable row level security;
