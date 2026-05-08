
drop policy if exists "cart_anon_all" on public.cart_items;
drop policy if exists "orders_anon_insert" on public.orders;
drop policy if exists "subscribers_anon_insert" on public.subscribers;
-- All writes happen through server functions using the service role key,
-- which bypasses RLS. No anon policies needed.
