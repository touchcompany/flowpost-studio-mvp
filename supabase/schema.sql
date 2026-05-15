-- Flowpost Studio MVP
-- Esquema inicial para migrar desde localStorage/data/db.json hacia Supabase Postgres.
-- Ejecutar en Supabase SQL Editor cuando ya exista el proyecto.

create extension if not exists pgcrypto;

create table if not exists public.app_profiles (
  id text primary key default gen_random_uuid()::text,
  auth_user_id uuid,
  name text not null default '',
  email text not null default '',
  provider text not null default 'demo',
  deleted_at timestamptz,
  deletion_expires_at timestamptz,
  deleted_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id text primary key default gen_random_uuid()::text,
  profile_id text not null references public.app_profiles(id) on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text not null default 'starter',
  plan_label text not null default 'Starter',
  status text not null default 'trial',
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.oauth_connections (
  id text primary key,
  provider text not null,
  access_token text not null default '',
  refresh_token text not null default '',
  expires_at timestamptz,
  scopes text not null default '',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.billing_events (
  id text primary key,
  type text not null default 'unknown',
  payload jsonb not null default '{}'::jsonb,
  processed_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.companies (
  id text primary key default gen_random_uuid()::text,
  name text not null,
  handle text not null default '',
  description text not null default '',
  voice text not null default '',
  primary_color text not null default '#0095f6',
  social_networks text[] not null default array['Instagram'],
  deleted_at timestamptz,
  deletion_expires_at timestamptz,
  deleted_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.company_members (
  id text primary key default gen_random_uuid()::text,
  company_id text not null references public.companies(id) on delete cascade,
  user_id uuid,
  email text not null default '',
  role text not null default 'owner',
  created_at timestamptz not null default now()
);

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

create table if not exists public.social_accounts (
  id text primary key default gen_random_uuid()::text,
  company_id text not null references public.companies(id) on delete cascade,
  platform text not null,
  platform_key text not null,
  handle text not null default '',
  status text not null default 'No conectado',
  note text not null default '',
  access_token_encrypted text,
  refresh_token_encrypted text,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, platform_key)
);

create table if not exists public.media_sources (
  id text primary key default gen_random_uuid()::text,
  company_id text not null references public.companies(id) on delete cascade,
  provider text not null default 'Google Drive',
  folder text not null default '',
  external_folder_id text,
  connected boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.media_assets (
  id text primary key default gen_random_uuid()::text,
  company_id text not null references public.companies(id) on delete cascade,
  media_source_id text references public.media_sources(id) on delete set null,
  title text not null,
  provider text not null default 'Google Drive',
  source_url text not null,
  storage_path text,
  duration text not null default '00:20',
  file_size text not null default 'Pendiente',
  tone text not null default 'mint',
  status text not null default 'ready',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id text primary key default gen_random_uuid()::text,
  company_id text not null references public.companies(id) on delete cascade,
  media_asset_id text references public.media_assets(id) on delete set null,
  type text not null default 'Video / Reel',
  title text not null default '',
  caption text not null default '',
  notes text not null default '',
  platforms text[] not null default array[]::text[],
  media_source text not null default '',
  cover jsonb not null default '{}'::jsonb,
  scheduled_date date,
  scheduled_time time,
  status text not null default 'Idea',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.post_jobs (
  id text primary key default gen_random_uuid()::text,
  post_id text references public.posts(id) on delete cascade,
  company_id text not null references public.companies(id) on delete cascade,
  platform text not null,
  type text not null default 'Video / Reel',
  media_provider text not null default '',
  media_source text not null default '',
  caption text not null default '',
  status text not null default 'Programado',
  scheduled_for timestamptz,
  published_at timestamptz,
  external_post_id text,
  error_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists companies_name_idx on public.companies (name);
create index if not exists companies_deleted_idx on public.companies (deleted_at, deletion_expires_at);
create index if not exists app_profiles_email_idx on public.app_profiles (email);
create index if not exists app_profiles_deleted_idx on public.app_profiles (deleted_at, deletion_expires_at);
create index if not exists subscriptions_profile_idx on public.subscriptions (profile_id);
create index if not exists oauth_connections_provider_idx on public.oauth_connections (provider);
create index if not exists billing_events_type_idx on public.billing_events (type, created_at desc);
create index if not exists company_members_company_idx on public.company_members (company_id, email);
create index if not exists prompt_templates_company_idx on public.prompt_templates (company_id, type, created_at desc);
create index if not exists media_assets_company_idx on public.media_assets (company_id, created_at desc);
create index if not exists posts_company_schedule_idx on public.posts (company_id, scheduled_date, scheduled_time);
create index if not exists posts_status_idx on public.posts (status);
create index if not exists post_jobs_company_status_idx on public.post_jobs (company_id, status);

alter table public.app_profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.oauth_connections enable row level security;
alter table public.billing_events enable row level security;
alter table public.companies enable row level security;
alter table public.company_members enable row level security;
alter table public.prompt_templates enable row level security;
alter table public.social_accounts enable row level security;
alter table public.media_sources enable row level security;
alter table public.media_assets enable row level security;
alter table public.posts enable row level security;
alter table public.post_jobs enable row level security;

-- Politicas recomendadas para cuando se active Supabase Auth.
-- Durante la primera migracion, usar el backend con SUPABASE_SERVICE_ROLE_KEY.
-- No expongas service role en el frontend.
