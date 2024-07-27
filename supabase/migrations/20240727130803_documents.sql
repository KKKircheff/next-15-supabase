create extension if not exists "vector" with schema "extensions";


create sequence "public"."documents_id_seq";

create table "public"."documents" (
    "id" integer not null default nextval('documents_id_seq'::regclass),
    "title" text not null,
    "body" text not null,
    "embedding" vector(3)
);


alter sequence "public"."documents_id_seq" owned by "public"."documents"."id";

CREATE UNIQUE INDEX documents_pkey ON public.documents USING btree (id);

alter table "public"."documents" add constraint "documents_pkey" PRIMARY KEY using index "documents_pkey";

grant delete on table "public"."documents" to "anon";

grant insert on table "public"."documents" to "anon";

grant references on table "public"."documents" to "anon";

grant select on table "public"."documents" to "anon";

grant trigger on table "public"."documents" to "anon";

grant truncate on table "public"."documents" to "anon";

grant update on table "public"."documents" to "anon";

grant delete on table "public"."documents" to "authenticated";

grant insert on table "public"."documents" to "authenticated";

grant references on table "public"."documents" to "authenticated";

grant select on table "public"."documents" to "authenticated";

grant trigger on table "public"."documents" to "authenticated";

grant truncate on table "public"."documents" to "authenticated";

grant update on table "public"."documents" to "authenticated";

grant delete on table "public"."documents" to "service_role";

grant insert on table "public"."documents" to "service_role";

grant references on table "public"."documents" to "service_role";

grant select on table "public"."documents" to "service_role";

grant trigger on table "public"."documents" to "service_role";

grant truncate on table "public"."documents" to "service_role";

grant update on table "public"."documents" to "service_role";


