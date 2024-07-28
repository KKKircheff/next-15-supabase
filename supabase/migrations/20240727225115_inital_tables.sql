create schema if not exists private;

insert into storage.buckets (id, name)
values ('files', 'files')
on conflict do nothing;

create or replace function private.uuid_or_null(str text)
returns uuid
language plpgsql
as $$
begin
  return str::uuid;
  exception when invalid_text_representation then
    return null;
  end;
$$;

create table documents (
  id bigint primary key generated always as identity,
  name text not null,
  storage_object_id uuid not null references storage.objects (id),
  created_by uuid not null references auth.users (id) default auth.uid(),
  created_at timestamp with time zone not null default now()
);

create table document_sections (
  id bigint primary key generated always as identity,
  document_id bigint not null references documents (id),
  content text not null,
  embedding vector (384)
);

create index on document_sections using hnsw (embedding vector_ip_ops);

create view documents_with_storage_path
with (security_invoker=true)
as
  select documents.*, storage.objects.name as storage_object_path
  from documents
  join storage.objects
    on storage.objects.id = documents.storage_object_id;

alter table documents enable row level security;
alter table document_sections enable row level security;

create policy "Authenticated users can upload files"
on storage.objects for insert to authenticated with check (
  bucket_id = 'files' and
    owner = auth.uid() and
    private.uuid_or_null(path_tokens[1]) is not null
);

create policy "Users can view their own files"
on storage.objects for select to authenticated using (
  bucket_id = 'files' and owner = auth.uid()
);

create policy "Users can update their own files"
on storage.objects for update to authenticated with check (
  bucket_id = 'files' and owner = auth.uid()
);

create policy "Users can delete their own files"
on storage.objects for delete to authenticated using (
  bucket_id = 'files' and owner = auth.uid()
);

create policy "Users can insert documents"
on documents for insert to authenticated with check (
  auth.uid() = created_by
);

create policy "Users can query their own documents"
on documents for select to authenticated using (
  auth.uid() = created_by
);

create policy "Users can insert document sections"
on document_sections for insert to authenticated with check (
  document_id in (
    select id
    from documents
    where created_by = auth.uid()
  )
);

create policy "Users can update their own document sections"
on document_sections for update to authenticated using (
  document_id in (
    select id
    from documents
    where created_by = auth.uid()
  )
) with check (
  document_id in (
    select id
    from documents
    where created_by = auth.uid()
  )
);

create policy "Users can query their own document sections"
on document_sections for select to authenticated using (
  document_id in (
    select id
    from documents
    where created_by = auth.uid()
  )
);

