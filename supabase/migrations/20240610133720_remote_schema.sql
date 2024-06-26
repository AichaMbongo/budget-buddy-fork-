
create table "public"."transaction1" (
    "id" bigint generated by default as identity not null,
    "transactiondate" date,
    "category" text,
    "amount" bigint,
    "description" text,
    "type" text
);


alter table "public"."transaction" add column "category" text;

CREATE UNIQUE INDEX transaction1_pkey ON public.transaction1 USING btree (id);

alter table "public"."transaction1" add constraint "transaction1_pkey" PRIMARY KEY using index "transaction1_pkey";

grant delete on table "public"."transaction1" to "anon";

grant insert on table "public"."transaction1" to "anon";

grant references on table "public"."transaction1" to "anon";

grant select on table "public"."transaction1" to "anon";

grant trigger on table "public"."transaction1" to "anon";

grant truncate on table "public"."transaction1" to "anon";

grant update on table "public"."transaction1" to "anon";

grant delete on table "public"."transaction1" to "authenticated";

grant insert on table "public"."transaction1" to "authenticated";

grant references on table "public"."transaction1" to "authenticated";

grant select on table "public"."transaction1" to "authenticated";

grant trigger on table "public"."transaction1" to "authenticated";

grant truncate on table "public"."transaction1" to "authenticated";

grant update on table "public"."transaction1" to "authenticated";

grant delete on table "public"."transaction1" to "service_role";

grant insert on table "public"."transaction1" to "service_role";

grant references on table "public"."transaction1" to "service_role";

grant select on table "public"."transaction1" to "service_role";

grant trigger on table "public"."transaction1" to "service_role";

grant truncate on table "public"."transaction1" to "service_role";

grant update on table "public"."transaction1" to "service_role";


