// import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'
import { MigrateUpArgs, sql } from '@payloadcms/db-postgres'


export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    create table tours (
      id bigint primary key generated always as identity,
      slug text not null,
      title jsonb not null,
      description jsonb,
      short_description jsonb,
      duration text,
      difficulty text,
      price numeric(10, 2),
      image text,
      gallery jsonb,
      highlights jsonb,
      included jsonb,
      excluded jsonb,
      itinerary jsonb,
      category text,
      max_group_size int,
      minimum_age int,
      best_season text
    );

    create table tour_translations (
      id bigint primary key generated always as identity,
      tour_id bigint references tours (id) on delete cascade,
      language text not null,
      title text not null,
      description text,
      short_description text,
      highlights text,
      included text,
      excluded text,
      itinerary text,
      unique (tour_id, language)
    );

    create table tour_images (
      id bigint primary key generated always as identity,
      tour_id bigint references tours (id) on delete cascade,
      image_url text not null
    );
  `)
}
