
-- Categories enum
create type public.product_category as enum (
  'lenceria', 'bombachas', 'medias', 'maquillaje', 'accesorios', 'boxers', 'bufandas'
);

-- Products
create table public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category product_category not null,
  price numeric(10,2) not null check (price >= 0),
  image_url text,
  description text,
  stock integer not null default 0 check (stock >= 0),
  active boolean not null default true,
  featured boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.products enable row level security;
create policy "products_public_read" on public.products for select using (active = true);

-- Cart items (anonymous, by session)
create table public.cart_items (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  product_id uuid not null references public.products(id) on delete cascade,
  qty integer not null default 1 check (qty > 0 and qty <= 99),
  created_at timestamptz not null default now(),
  unique (session_id, product_id)
);
create index on public.cart_items (session_id);
alter table public.cart_items enable row level security;
-- Open policies; security enforced by session_id which is server-controlled cookie
create policy "cart_anon_all" on public.cart_items for all using (true) with check (true);

-- Orders
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  session_id text,
  customer_phone text not null,
  customer_name text,
  items jsonb not null,
  total numeric(10,2) not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);
alter table public.orders enable row level security;
create policy "orders_anon_insert" on public.orders for insert with check (true);
-- no select policy: nobody can read publicly

-- Newsletter subscribers
create table public.subscribers (
  id uuid primary key default gen_random_uuid(),
  phone text not null unique,
  created_at timestamptz not null default now()
);
alter table public.subscribers enable row level security;
create policy "subscribers_anon_insert" on public.subscribers for insert with check (true);
